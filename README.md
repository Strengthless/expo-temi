# Expo-Temi
An Expo module for [Robot Temi SDK](https://github.com/robotemi/sdk). Currently under development.

## Setup
### Prerequisites
- [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/#set-up-a-virtual-device) 
    - If you're using Windows, you need to use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
    - Remember to configure your `ANDROID_HOME` and `PATH` variables. 
    - For WSL, you might want to make a copy of `adb.exe` renamed as `adb`, or adding `alias adb='adb.exe'` in your `.bashrc`.
- [Node.js](https://nodejs.org/en/download)
### Installation
```
git clone https://github.com/Strengthless/expo-temi.git
cd ./expo-temi
npm install
cd ./example
npm install
```
### Development
The only three files that you'd likely be interested in are `/android/src/main/java/expo/modules/temi/ExpoTemiModule.kt`, `/src/index.ts` and `/example/App.tsx`, which are respectively responsible for Native code implementation, Expo module definitions and Expo module testing.
```
npm run build
cd ./example
npx expo run:android
```