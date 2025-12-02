@echo off
REM Script para iniciar el servidor local del blog en Windows

echo ==================================
echo Blog Técnico de Grafos
echo Iniciando servidor local...
echo ==================================
echo.

REM Intentar con python3 primero, luego python
python -m http.server 8000
if errorlevel 1 (
    echo Error: No se encontró Python instalado
    echo Por favor, instala Python desde https://www.python.org
    pause
    exit /b 1
)

echo.
echo Servidor iniciado en http://localhost:8000
echo Presiona Ctrl+C para detener el servidor
pause
