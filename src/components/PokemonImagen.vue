<template>
  <div class="pokemon-container">
    <img v-show="!showPokemon" class="ocultar" :src="imgenFuente" alt="No se pudo cargar" />
    <img v-show="showPokemon" :src="imgenFuente" alt="No se pudo cargar" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon:{
        type: Boolean,
        required:true
    }
  },
  computed: {
    imgenFuente() {
    //   return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonId+".svg";
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style>
.ocultar {
  filter: brightness(0);
}
img {
  height: 200px;
  /* quitarle del espacio que ocupa en el display*/
  /* Los elementos dejan de respetar la posicion dentro de display(pagina/display) */
  position: absolute;
  right: 43%;
}
.pokemon-container {
  height: 220px;
}
</style>