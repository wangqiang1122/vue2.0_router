export default {
    name: 'functional-button',
    functional: true,
    render(createElement, context) {
        console.log(context)
        return createElement('button', {
            attrs: context.props,
            staticClass: context.data.staticClass,
            on: {
              click: context.listeners.click
            }
          },
          context.children
          )
    }
}