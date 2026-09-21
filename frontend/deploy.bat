@echo off
setlocal enabledelayedexpansion
title 🚀 Interactive Deploy Script
color 0A

:: Show menu
echo.
echo ================================
echo  Select Operations to Perform
echo ================================
echo 1. Build
echo 2. Deploy
echo 3. Git Add
echo 4. Git Commit
echo 5. Git Push
echo 6. All (Build + Deploy + Git Add + Commit + Push)
echo (Use comma-separated list, e.g., 1,3,4,5 or just 6)
echo ================================
set /p userInput=Enter your choices: 

:: Replace commas with spaces
set "options=%userInput:,= %"

:: Ask for commit message if option 4 or 6 is selected
set "needCommitMsg=false"
for %%i in (%options%) do (
    if "%%i"=="4" (
        set "needCommitMsg=true"
    )
    if "%%i"=="6" (
        set "needCommitMsg=true"
    )
)

if "!needCommitMsg!"=="true" (
    set /p msg=Enter commit message: 
)

:: Execute selected commands
for %%i in (%options%) do (
    if "%%i"=="1" (
        echo Running: npm run build
        call npm run build
    )
    if "%%i"=="2" (
        echo Running: npm run deploy
        call npm run deploy
    )
    if "%%i"=="3" (
        echo Running: git add .
        git add .
    )
    if "%%i"=="4" (
        echo Running: git commit -m "!msg!"
        git commit -m "!msg!"
    )
    if "%%i"=="5" (
        echo Running: git push origin main
        git push origin main
    )
    if "%%i"=="6" (
        echo Running: All Steps (Build → Deploy → Git add → Commit → Push)
        call npm run build
        call npm run deploy
        git add .
        git commit -m "!msg!"
        git push origin main
    )
)

echo.
echo ✅ All selected commands executed.
pause
