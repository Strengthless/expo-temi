import { EventEmitter, Subscription } from 'expo-modules-core';
import ExpoTemiModule from './ExpoTemiModule';

const emitter = new EventEmitter(ExpoTemiModule);

export type ThemeChangeEvent = {
  theme: string;
};

export function addThemeListener(listener: (event: ThemeChangeEvent) => void): Subscription {
  return emitter.addListener<ThemeChangeEvent>('onChangeTheme', listener);
}

export function getTheme(): string {
  return ExpoTemiModule.getTheme();
}

export function setTheme(theme: string): void {
  return ExpoTemiModule.setTheme(theme);
}

export function speak(text: string): void {
  return ExpoTemiModule.speak(text);
}