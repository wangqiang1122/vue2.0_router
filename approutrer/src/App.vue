<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div id="nav">
      <router-link to="/">
      Home</router-link>|
      <router-link to="/login">About</router-link>
    </div>
    <FunctionalButton @click="log" class='ban1'> 
      click meaaa
    </FunctionalButton>
    <x test='2222'></x>
    <!-- 路由出口 -->
    <router-view />

  </div>
</template>

<script>
import FunctionalButton from './components/final.js';
import child from './components/child.vue';
import father from './components/father.js';
var x = father(child)  
export default {
  name: 'App',
  components: {
    FunctionalButton,
    x,
  },
  methods: {
    log() {
      console.log('222')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ban1{
  background-color: red;
}
</style>
