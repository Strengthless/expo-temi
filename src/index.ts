import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoTemi.web.ts
// and on native platforms to ExpoTemi.ts
import ExpoTemiModule from './ExpoTemiModule';
import ExpoTemiView from './ExpoTemiView';
import { ChangeEventPayload, ExpoTemiViewProps } from './ExpoTemi.types';

// Get the native constant value.
export const PI = ExpoTemiModule.PI;

export function hello(): string {
  return ExpoTemiModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoTemiModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoTemiModule ?? NativeModulesProxy.ExpoTemi);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoTemiView, ExpoTemiViewProps, ChangeEventPayload };
