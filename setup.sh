#!/bin/bash

echo "========================================"
echo "  Bob's Pizza Adventure - Setup"
echo "========================================"
echo ""
echo "Hi! I'm Bob, and I'm setting up the pizza adventure for you! 🤖🍕"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "Error: Please run this script from the bob-pizza-adventure directory!"
    exit 1
fi

echo "[1/3] Checking files..."
sleep 1

if [ -f "index.html" ]; then
    echo "✓ Main page found"
else
    echo "✗ Main page missing!"
    exit 1
fi

if [ -f "pizza-app.html" ]; then
    echo "✓ Pizza app found"
else
    echo "✗ Pizza app missing!"
    exit 1
fi

if [ -f "css/styles.css" ]; then
    echo "✓ Styles found"
else
    echo "✗ Styles missing!"
    exit 1
fi

if [ -f "js/main.js" ]; then
    echo "✓ JavaScript found"
else
    echo "✗ JavaScript missing!"
    exit 1
fi

echo ""
echo "[2/3] All files verified! ✓"
sleep 1
echo ""

echo "[3/3] Opening Bob's Pizza Adventure..."
sleep 1
echo ""

# Open in default browser based on OS
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open index.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    if command -v xdg-open > /dev/null; then
        xdg-open index.html
    elif command -v gnome-open > /dev/null; then
        gnome-open index.html
    else
        echo "Please open index.html in your browser manually"
    fi
else
    echo "Please open index.html in your browser manually"
fi

echo ""
echo "========================================"
echo "  Setup Complete! 🎉"
echo "========================================"
echo ""
echo "Bob's Pizza Adventure is now running in your browser!"
echo ""
echo "What you can do:"
echo "  • Follow the interactive SDLC journey"
echo "  • Play mini-games at each phase"
echo "  • Order a virtual pizza at the end"
echo "  • Share your experience on LinkedIn"
echo ""
echo "Enjoy the adventure! 🚀"
echo ""

# Made with Bob
