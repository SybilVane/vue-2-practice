<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/about"> GO TO ABOUT </router-link>
    <PracticeComponent
      title="Practice Vue with Arturo"
      has-to-show-subtitle
      :movie-list="movieList"
      @vane-click="showAlert"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PracticeComponent from './components/PracticeComponent.vue'

export default {
  components: {
    HelloWorld,
    PracticeComponent
  },
  methods: {
    showAlert() {
      alert('Vane Click!')
    }
  },
  data() {
    return {
      movieList: []
    }
  },
  created() {
    fetch(
      'https://bitbucket.org/!api/2.0/snippets/clarity-ai/zeGpkj/57d3cf6d02c2fd3a41091a8529c36382c5eaea35/files/movies.json'
    )
      .then((response) => response.json())
      .then((data) => (this.movieList = data.slice(0, 100)))
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
