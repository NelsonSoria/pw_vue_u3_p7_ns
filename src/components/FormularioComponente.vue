<template>
  <div class="container">
    <div class="container-formulario">
      <p type="Id:"><input type="number" v-model="id" /></p>
      <p type="Nombre:"><input type="text" v-model="nombre" /></p>
      <p type="Fecha Nacimiento:"><input type="date" v-model="fecha" /></p>
      <p type="Apellido:"><input type="text" v-model="apellido" /></p>
      <button @click="buscar()">buscar</button>
      <button @click="guardar()">Guardar</button>
    </div>
  </div>
</template>

<script>
import { obtenerPorIdFachada,insertarFachada } from "@/client/PersonaClient.js";
export default {
  mounted() {
    console.log("Antes de llamar a la API");
    obtenerPorIdFachada(2);
  },
  data() {
    return {
      id: "",
      nombre: "",
      fecha: "",
      apellido: "",
    };
  },
  methods: {
    async buscar() {
      const data = await obtenerPorIdFachada(this.id);
      this.nombre = data.nombre;
      this.fecha = data.fechaNacimiento;
      const fechaObjeto = new Date(this.fecha);

      const fechaFormateada = fechaObjeto.toLocaleDateString();
      console.log(fechaFormateada);
      this.fecha=fechaFormateada;
      
      this.apellido = data.apellido;
    },
    async guardar (){
      const bodyPersona = {
        nombre: this.nombre,
        fechaNacimiento:this.fecha,
        apellido: this.apellido
      };
      await insertarFachada();
    }
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
p::before {
  display: block;
  content: attr(type);
  font-weight: bold;
}
</style>