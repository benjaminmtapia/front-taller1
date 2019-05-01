<template>
  <div id="app">
    <div class="title">
      <h2>Taller de Bases de Datos</h2>
    </div>
    <div id="tabs">
    <tabs/>
    </div>
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
  float:center;
  margin-top: 60px;
}
#title{
  font-size:24px;
  width: 300px;
  float:center;

}
</style>