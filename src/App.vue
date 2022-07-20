<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 2 + Vite" />
    <ConcatInput :title="8" has-to-show-subtitle @vane-click="showAlert" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ConcatInput from './components/ConcatInput.vue'

export default {
  components: {
    HelloWorld,
    ConcatInput
  },
  methods: {
    showAlert() {
      alert('Vane Click!')
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
</style>
