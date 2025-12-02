#!/bin/bash
# Script para iniciar el servidor local del blog

echo "=================================="
echo "Blog Técnico de Grafos"
echo "Iniciando servidor local..."
echo "=================================="
echo ""

# Detectar el sistema operativo
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    echo "Sistema detectado: Windows"
    python -m http.server 8000
elif [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Sistema detectado: macOS"
    python3 -m http.server 8000
else
    echo "Sistema detectado: Linux/Unix"
    python3 -m http.server 8000
fi

echo ""
echo "Servidor iniciado en http://localhost:8000"
echo "Presiona Ctrl+C para detener el servidor"
