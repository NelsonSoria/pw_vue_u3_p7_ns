<template>
  <div class="options-container">
    <ul>
      <li
        @click="seleccionado(pokemon.id)"
        v-for="pokemon in arregloPokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  props: {
    arregloPokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    seleccionado(id) {
      console.log("Hizo click");
      console.log(id);
      const objetoEnviado = {
        identificador: id,
        valor2: true,
        valor3: "Pokemado",
      };
      this.$emit("getId", objetoEnviado);
    },
  },
};
</script>
<style>
ul {
  /* Quitar los puntos */
  list-style-type: none;
}
li {
  background: white;
  width: 250px;
  border: 1px solid;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 20px;
  padding: 10px 5px;
}
li:hover {
  background: rgba(0, 0, 0, 0.05);
}
.options-container {
  display: flex;
  justify-content: center;
}

</style> 