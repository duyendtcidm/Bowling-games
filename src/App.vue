<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './components/Home.vue'

export default {

  name: 'App',
  components: {
    HomePage  
  }
}
</script>

<style>
html, body {
  margin:0px;
}

@font-face {
  font-family: 'Zen Maru Gothic';
  src: url(./assets/fonts/ZenMaruGothic-Regular.ttf);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
</style>
