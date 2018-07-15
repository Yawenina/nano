// @flow
import { create } from 'zoid';
import { containerTemplate } from './ModalContainer';
import { Button as ButtonTemplate } from './Button';

export const Component = create({
  tag: 'checkout-component',
  defaultEnv: 'locale',
  url: {
    locale: 'http://localhost:8080/button.html'
  },
  prerenderTemplate({ jsxDom, props }) : HTMLElement {
    return (
      <html>
        <head>
          <style>
            {
              `
                html, body {
                  margin: 0;
                  padding: 0;
                  border: 0;
                }
              `
            }
          </style>
        </head>
        <body>
          { ButtonTemplate() }
        </body>
      </html>
    )
  },
});

export const Modal = create({
  tag: 'my-modal',
  defaultEnv: 'locale',
  url: {
    locale: 'http://localhost:8080/modal.html'
  },
  dimensions: {
    width: '100%',
    height: '100%'
  },
  // prerenderTemplate({ props, jsxDom }) : HTMLElement {
  //   return (
  //     <html>
  //     <head>
  //       <style>
  //         {
  //           `
  //               html, body {
  //                 margin: 0;
  //                 padding: 0;
  //                 border: 0;
  //               }
  //             `
  //         }
  //       </style>
  //     </head>
  //     <body>
  //     { ButtonTemplate() }
  //     </body>
  //     </html>
  //   )
  // },
  containerTemplate
});

