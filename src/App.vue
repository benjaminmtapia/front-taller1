<template>
  <div id="app">
    <tabs/>
  </div>
</template>

<script>
import tabs from './components/tabs.vue'

export default {
  name: 'app',
  components: {
    tabs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>