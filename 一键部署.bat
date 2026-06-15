@echo off
cd /d "H:\办公其他\TRAE\鸿鹄官网草稿"
git add .
git commit -m "更新官网"
git push
echo.
echo 部署完成！等1-2分钟后刷新网站即可看到更新。
pause
