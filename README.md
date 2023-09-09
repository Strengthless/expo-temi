# Expo-Temi
`expo-temi` provides an interface to communicate with [Temi](https://www.robotemi.com/robots/) hardware using [Temi SDK](https://github.com/robotemi/sdk).

Currently still under development, PRs are welcomed.

### Installation
You need to use JDK 17 for this module, otherwise Android compilation might fail.
```
npx expo install expo-temi
```

### API documentation
We are currently on Temi SDK `1.131.4`, and we hope to port every method from the official [Temi Robot API](https://github.com/robotemi/sdk/wiki).

As of the time being, only the `speak(text: string)` has been implemented as a POC.
### Contributing
PRs are welcomed! The source code is available at https://github.com/strengthless/expo-temi.

The only three files that you'd likely be interested in are `/android/src/main/java/expo/modules/temi/ExpoTemiModule.kt`, `/src/index.ts` and `/example/App.tsx`, which are respectively responsible for native code implementation, Expo module API definitions and Expo module testing.
```
npm run build
cd ./example
npx expo run:android
```