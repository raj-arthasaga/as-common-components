import 'bootstrap/dist/css/bootstrap.min.css';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/styles/Global.style';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
addDecorator((s) => (
  <>
    <GlobalStyle />
    {s()}
  </>
));
