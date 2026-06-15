@echo off
chcp 65001 >nul
title 鸿鹄官网 - 启动中...
echo 正在启动鸿鹄官网服务...
start "鸿鹄官网服务" python server.py
timeout /t 2 /nobreak >nul
echo 正在打开浏览器...
start http://localhost:8800
echo.
echo 已启动！黑窗口保持运行即可。关闭黑窗口将停止服务。
pause
