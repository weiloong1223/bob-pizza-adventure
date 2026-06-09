@echo off
echo ========================================
echo   Bob's Pizza Adventure - Setup
echo ========================================
echo.
echo Hi! I'm Bob, and I'm setting up the pizza adventure for you! 🤖🍕
echo.

REM Check if we're in the right directory
if not exist "index.html" (
    echo Error: Please run this script from the bob-pizza-adventure directory!
    pause
    exit /b 1
)

echo [1/3] Checking files...
timeout /t 1 /nobreak >nul
if exist "index.html" (
    echo ✓ Main page found
) else (
    echo ✗ Main page missing!
    pause
    exit /b 1
)

if exist "pizza-app.html" (
    echo ✓ Pizza app found
) else (
    echo ✗ Pizza app missing!
    pause
    exit /b 1
)

if exist "css\styles.css" (
    echo ✓ Styles found
) else (
    echo ✗ Styles missing!
    pause
    exit /b 1
)

if exist "js\main.js" (
    echo ✓ JavaScript found
) else (
    echo ✗ JavaScript missing!
    pause
    exit /b 1
)

echo.
echo [2/3] All files verified! ✓
timeout /t 1 /nobreak >nul
echo.

echo [3/3] Opening Bob's Pizza Adventure...
timeout /t 1 /nobreak >nul
echo.

REM Open in default browser
start "" "index.html"

echo.
echo ========================================
echo   Setup Complete! 🎉
echo ========================================
echo.
echo Bob's Pizza Adventure is now running in your browser!
echo.
echo What you can do:
echo   • Follow the interactive SDLC journey
echo   • Play mini-games at each phase
echo   • Order a virtual pizza at the end
echo   • Share your experience on LinkedIn
echo.
echo Enjoy the adventure! 🚀
echo.
pause

@REM Made with Bob
