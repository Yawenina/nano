// @flow
import { create } from 'zoid';
import { containerTemplate } from './ModalContainer';

export const Component = create({
  tag: 'checkout-component',
  defaultEnv: 'locale',
  url: {
    locale: 'http://localhost:8080/button.html'
  },
});

export const Modal = create({
  tag: 'my-modal',
  defaultEnv: 'locale',
  url: {
    locale: 'http://localhost:8080/modal.html'
  },
  props: {
    closeModal: {
      type: 'function',
      required: true
    }
  },
  containerTemplate
});

