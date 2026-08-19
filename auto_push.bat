@echo off
chcp 65001 > nul
title GitHub Auto-Push Watcher
powershell -ExecutionPolicy Bypass -File "%~dp0auto_push.ps1" %*
pause
