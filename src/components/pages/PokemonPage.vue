<template>
  <div v-if="pokeCorrecto">
    <h2>Adivina el pokemon de la Imagen</h2>
    <div class="container-score">
      <h1>Score: {{ score }}</h1>
      <h1>Intentos: {{ intentos }}</h1>
    </div>
    <PokemonImagenVue
      ref="miHijo"
      :pokemonId="pokeCorrecto.id"
      :showPokemon="pokemonShow"
    />
    <PokemonOpcionesVue
      @getId="validarRespuesta($event)"
      :arregloPokemons="pokemonArr"
      v-show="!gano"
    />
    <div class="container-victoria" v-show="mensajeShowVictoria">
      <h1 class="txt-victoria">FELICIDADES GANASTE!!!!</h1>
      <button @click="reiniciarJuego()">Reiniciar</button>
    </div>

    <div class="container-derrota" v-show="mensajeShowDerrota">
      <h1 class="txt-derrota">DERROTA!!!!</h1>
      <button @click="reiniciarJuego()" class="btn-derrota">Reiniciar</button>
    </div>
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
      pokeCorrecto: null,
      pokemonShow: false,
      gano: false,
      mensajeShowDerrota: false,
      mensajeShowVictoria: false,
      score: 0,
      intentos: 0,
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
  beforeCreate() {
    //antes de crear el componente
    console.log("beforeCreate");
  },
  created() {
    //cuando se crea el componente
    console.log("created");
  },
  beforeMount() {
    //antes de montar el componente
    console.log("beforeMount");
  },
  updated() {
    //cuando se actualiza el componente (se ejecuta despues de montar)
    console.log("updated");
  },
  beforeUpdate() {
    //antes de actualizar el componente (se ejecuta despues de montar)
    console.log("beforeUpdate");
  },

  methods: {
    async cargarJuego() {
      this.pokemonShow = false;
      this.gano = false;
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0, 3);
      console.log("Este es el aleatorio");
      console.log(valorAleatorio);
      this.pokeCorrecto = this.pokemonArr[valorAleatorio];

      console.log("Nuevo Pokémon cargado:", this.pokeCorrecto);
    },
    validarRespuesta(valor) {
      console.log("Validando respuesta");
      console.log(valor);

      const idCorrecto = valor.identificador;
      this.intentos++;
      if (this.pokeCorrecto.id === idCorrecto) {
        console.log("Respuesta correcta");

        this.pokemonShow = true;
        this.score += 4;

        if (this.intentos >= 5) {
          if (this.score >= 6) {
            this.mensajeShowVictoria = true;
            this.gano = true;
            return;
          }
          this.mensajeShowDerrota = true;
          this.gano = true;
          return;
        }

        setTimeout(() => {
          this.cargarJuego();
        }, 1000);
      } else {
        console.log("Respuesta incorrecta");
        this.score -= 1;
        this.pokemonShow = false;
      }

      const valorHijo = this.$refs.miHijo.idPokemon;
      console.log("Este es el valor del hijo por refs: " + valorHijo);

      console.log(this.$refs.miHijo.propPrueba);
      this.$refs.miHijo.metodoPrueba();
    },
    reiniciarJuego() {
      this.score = 0;
      this.intentos = 0;
      this.mensajeShowVictoria = false;
      this.mensajeShowDerrota = false;
      this.gano = false;
      this.pokemonShow = false;
      this.cargarJuego();
    },
  },
};
</script>

<style>
.txt-victoria {
  color: green;
}
button {
  background: green;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
}
.txt-derrota {
  color: red;
}
.btn-derrota {
  background: red;
}
.container-score {
  display: flex;
  justify-content: space-around;
}
</style>