// @flow

export function containerTemplate({ id, CLASS, props, CONTEXT, tag, context, actions, outlet, jsxDom, document }) {
  console.warn(CLASS);
  console.warn(CONTEXT);
  function closeModal() {
    actions.close();
  }
  return (
    <div id={id}
         class={
            `
              ${ CLASS.ZOID }
              ${ CLASS.ZOID }-tag-${ tag }
              ${ CLASS.ZOID }-context-${ context }
            `
         }
         onClick={closeModal}
    >
      <style>
        {
          `
            #${id} {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.8);
            }
            #${id}.${CLASS.ZOID}-context-${CONTEXT.IFRAME} .${CLASS.OUTLET} {
                box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.4);
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
                -webkit-transform: translate3d(-50%, -50%, 0);
                -moz-transform: translate3d(-50%, -50%, 0);
                -o-transform: translate3d(-50%, -50%, 0);
                -ms-transform: translate3d(-50%, -50%, 0);
            }

          `
        }
      </style>
      { outlet }
    </div>
  )
}