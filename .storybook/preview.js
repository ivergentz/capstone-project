import React from 'react';
import GlobalStyles from '../src/GlobalStyles';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}