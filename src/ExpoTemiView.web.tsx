import * as React from 'react';

import { ExpoTemiViewProps } from './ExpoTemi.types';

export default function ExpoTemiView(props: ExpoTemiViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
