"""
鸿鹄官网 - 后端服务
提供图片上传/删除 + 数据读写 API
启动: python server.py
默认端口 8800，访问 http://localhost:8800
"""
import os
import json
import uuid
import shutil
from pathlib import Path
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")

BASE_DIR = Path(__file__).parent
IMAGES_DIR = BASE_DIR / "images"
DATA_FILE = BASE_DIR / "data.json"

# 允许的图片扩展名
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"}


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


# ==================== 静态文件服务 ====================

@app.route("/")
def index():
    return send_from_directory(str(BASE_DIR), "index.html")


@app.route("/admin")
def admin():
    return send_from_directory(str(BASE_DIR), "admin.html")


@app.route("/admin-login")
def admin_login():
    return send_from_directory(str(BASE_DIR), "admin-login.html")


# ==================== 数据 API ====================

@app.route("/api/data", methods=["GET"])
def get_data():
    """读取网站数据"""
    if DATA_FILE.exists():
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return jsonify(json.load(f))
    return jsonify({})


@app.route("/api/data", methods=["POST"])
def save_data():
    """保存网站数据"""
    try:
        data = request.get_json(force=True)
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return jsonify({"ok": True})
    except Exception as e:
        return jsonify({"ok": False, "error": str(e)}), 400


# ==================== 图片 API ====================

@app.route("/api/upload", methods=["POST"])
def upload_image():
    """上传图片，返回文件名"""
    if "file" not in request.files:
        return jsonify({"ok": False, "error": "没有文件"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"ok": False, "error": "文件名为空"}), 400

    if not allowed_file(file.filename):
        return jsonify({"ok": False, "error": f"不支持的文件类型，允许: {', '.join(ALLOWED_EXTENSIONS)}"}), 400

    # 生成唯一文件名，保留原始扩展名
    ext = file.filename.rsplit(".", 1)[1].lower()
    unique_name = f"{uuid.uuid4().hex}.{ext}"
    save_path = IMAGES_DIR / unique_name

    file.save(str(save_path))
    return jsonify({"ok": True, "filename": unique_name, "url": f"images/{unique_name}"})


@app.route("/api/image/<filename>", methods=["DELETE"])
def delete_image(filename):
    """删除图片"""
    # 安全检查：防止路径穿越
    if ".." in filename or "/" in filename or "\\" in filename:
        return jsonify({"ok": False, "error": "非法文件名"}), 400

    file_path = IMAGES_DIR / filename
    if file_path.exists() and file_path.is_file():
        file_path.unlink()
        return jsonify({"ok": True})
    return jsonify({"ok": False, "error": "文件不存在"}), 404


@app.route("/api/images", methods=["GET"])
def list_images():
    """列出所有图片"""
    files = []
    for f in sorted(IMAGES_DIR.iterdir()):
        if f.is_file() and allowed_file(f.name):
            files.append({"filename": f.name, "url": f"images/{f.name}", "size": f.stat().st_size})
    return jsonify(files)


# ==================== 启动 ====================

if __name__ == "__main__":
    IMAGES_DIR.mkdir(exist_ok=True)
    print(f"鸿鹄官网服务已启动")
    print(f"  前台: http://localhost:8800")
    print(f"  后台: http://localhost:8800/admin-login")
    print(f"  图片目录: {IMAGES_DIR}")
    app.run(host="0.0.0.0", port=8800, debug=False)
