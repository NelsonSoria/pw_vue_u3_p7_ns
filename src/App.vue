<template>
  <PersonaPageVue />
</template>

<script>

// import PokemonPageVue from './components/pages/PokemonPage.vue'
import PersonaPageVue from './components/pages/PersonaPage.vue'

export default {
  name: 'App',
  components: {
    PersonaPageVue
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
