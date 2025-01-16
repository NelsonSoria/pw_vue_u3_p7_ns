<template>
  <h2>Adivina el pokemon de la Imagen</h2>
  <PokemonImagenVue/>
  <PokemonOpcionesVue/>

</template>

<script>
import PokemonImagenVue from "@/components/PokemonImagen.vue";
import PokemonOpcionesVue from "@/components/PokemonOpciones.vue";


/* https://pokeapi.co/api/v2/pokemon/${id}
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg */
export default {
     components: {
    PokemonImagenVue,
    PokemonOpcionesVue,
  }
  
};
</script>

<style>
</style>