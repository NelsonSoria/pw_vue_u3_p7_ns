<template>
  <div v-if="pokemonObjeto">
    <h2>Adivina el pokemon de la Imagen</h2>
    <PokemonImagenVue
      :pokemonId="pokemonObjeto.id"
      :showPokemon="pokemonShow"
    />
    <PokemonOpcionesVue :arregloPokemons="pokemonArr" />
  </div>
</template>

<script>
import PokemonImagenVue from "@/components/PokemonImagen.vue";
import PokemonOpcionesVue from "@/components/PokemonOpciones.vue";
import {
  consultarPokemonsFachada,
  obtenerAleatorioFachada,
} from "@/client/PokemonClient.js";

/* https://pokeapi.co/api/v2/pokemon/${id}
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg */
export default {
  data() {
    return {
      pokemonArr: [],
      pokemonObjeto: null,
      pokemonShow: false,
    };
  },
  components: {
    PokemonImagenVue,
    PokemonOpcionesVue,
  },
  mounted() {
    console.log("se monto en la pagina el componente PokemonPage.vue");
    this.cargarJuego();
  },
  methods: {
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0, 3);
      console.log("Este es el aleatorio");
      console.log(valorAleatorio);
      this.pokemonObjeto = this.pokemonArr[valorAleatorio];
    },
  },
};
</script>

<style>
</style>