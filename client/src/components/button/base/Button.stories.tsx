import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonBase } from './Button.component';

export default {
  title: 'Buttons',
  parameters: {
    info: { inline: true },
  },
};

export const PrimaryButton = () => (
  <ButtonBase label="test" variant="primary" onClick={action('clicked')} />
);
