#!/bin/bash
cd "$(dirname "$0")" || exit 1
PORT=8777
echo "Western Civilization I — Interactive"
echo "Open http://localhost:$PORT"
echo "Faculty preview: http://localhost:$PORT/?faculty=1"
echo "Close this window to stop."
exec python3 -m http.server "$PORT"
