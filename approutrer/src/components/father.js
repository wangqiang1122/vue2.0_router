
export default function WithConsole(Cmp) {
    return {
        mounted () {
          console.log('I have already mounted')
        },
        props: Cmp.props,
        render(h) {
          console.log(this.$slots);
          var slots = Object.keys(this.$slots).reduce((pre,current)=>{
            return pre.concat(this.$slots[current])
          },[])
          return h(Cmp, {
            on: this.$listeners,
            attrs: this.$attrs,
            props: this.$props
          }, slots)
        }
      }
}