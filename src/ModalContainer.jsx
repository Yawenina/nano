// @flow

export function containerTemplate({ id, CLASS, props, CONTEXT, tag, context, actions, outlet, jsxDom, document }) {
  const args = arguments;
  console.warn('hey', arguments)
  function closeModal(event) {
    console.warn('xxxxporp', args)
    console.warn('props', id, props, context)
    props.closeModal();
    // actions.close();
  }
  return (
    <div id={id}
         class={
            `
              ${ CLASS.XCOMPONENT }
              ${ CLASS.XCOMPONENT }-tag-${ tag }
              ${ CLASS.XCOMPONENT }-context-${ context }
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
          `
        }
      </style>
      { outlet }
    </div>
  )
}