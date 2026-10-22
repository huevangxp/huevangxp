@echo off
echo ==============================================
echo   huevangxp Auto-Push to GitHub
echo ==============================================
echo Press Ctrl+C to stop.
echo.

:loop
echo [%DATE% %TIME%] Checking for changes...
git add .
git commit -m "chore(profile): auto update modern portfolio & assets [%DATE% %TIME%]"
git push origin main
echo Waiting for 60 seconds...
timeout /t 60 /nobreak >nul
goto loop
