import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoTemiViewProps } from './ExpoTemi.types';

const NativeView: React.ComponentType<ExpoTemiViewProps> =
  requireNativeViewManager('ExpoTemi');

export default function ExpoTemiView(props: ExpoTemiViewProps) {
  return <NativeView {...props} />;
}
