import React from 'react';
import { Button } from '@storybook/react/demo';

import { entry } from '../src';

export default { title: 'Button' };

export const withText = () => (
  <Button>
    Hello Button
  </Button>
);

export const withEmoji = () => {
  return (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  );
}

export const desktopWindow = () => {
  entry({
    active: true,
    entry: '#clip-helper',
  });

  return (
    <div
      id="clip-helper"
      style={{
        width: '100%',
        height: '600px',
        background: '#ffc1071c',
      }}
    />
  );
}