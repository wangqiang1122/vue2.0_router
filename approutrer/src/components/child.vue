<template>
    <div>
      <span @click="handleClick">props: {{test}}</span>
      <slot></slot>
      <slot name="slot1"/>
    </div>
</template>

<script>
export default {
  name: 'zizujian',
  props: {
    test: Number
  },
  methods: {
    handleClick () {
      this.$emit('customize-click')
    }
  }
}
</script>

<style scoped>

</style>
