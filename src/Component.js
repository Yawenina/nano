// @flow
import { create } from 'zoid';

export const Component = create({
  tag: 'checkout-component',
  defaultEnv: 'locale',
  url: {
    locale: 'http://localhost:5000/button'
  },
});

