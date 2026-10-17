# Minimal Kivy Android app

A small Kivy app that displays “Hello, Android!”.

## Run on desktop

Install Kivy in a Python environment, then run:

```sh
python main.py
```

## Build an Android APK

Buildozer's Android toolchain runs on Linux. On Windows, use a Linux environment
such as WSL, install Buildozer there, and from this project directory run:

```sh
buildozer android debug
```

The generated APK is placed in `bin/`.

The GitHub Actions workflow builds a debug APK on pushes, pull requests, and
manual runs. Download the `minimal-kivy-app-debug-apk` artifact from the
workflow run to get the APK.
