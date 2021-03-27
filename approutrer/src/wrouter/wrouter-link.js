export default {
    props: {
        to: {
            type: String,
            required: true,
        }
    },
    render(h) {

      return h('a',{
          attrs: { herf:'#'+this.to }
      },this.$slots.default)
    }
}