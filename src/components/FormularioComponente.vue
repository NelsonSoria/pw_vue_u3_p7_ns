<template>
  <div class="container">
    <div class="container-formulario">
      <p type="Id:"><input type="number" v-model="id" /></p>
      <p type="Nombre:"><input type="text" v-model="nombre" /></p>
      <p type="Fecha Nacimiento:"><input type="text
      " v-model="fechaNacimiento" /></p>
      <p type="Apellido:"><input type="text" v-model="apellido" /></p>
      <button @click="buscar()">buscar</button>
      <button @click="guardar()">Guardar</button>
      <button @click="actualizar()">actualizar</button>
      <button @click="actualizarParcial()">actualizarParcial</button>
      <button @click="eliminar()">eliminar</button>
    </div>
  </div>
</template>

<script>
import { obtenerPorIdFachada,insertarFachada, actualizarFachada, actualizarParcialFachada ,eliminarFachada} from "@/client/PersonaClient.js";
export default {
  mounted() {
    console.log("Antes de llamar a la API");
    obtenerPorIdFachada(2);
  },
  data() {
    return {
      id: "",
      nombre: "",
      fechaNacimiento: "",
      apellido: "",
    };
  },
  methods: {
    async buscar() {
      console.log("buscar");
      const data = await obtenerPorIdFachada(this.id);
      this.nombre = data.nombre;
      this.fechaNacimiento = data.fechaNacimiento; 
      
      this.apellido = data.apellido;
    },
    async guardar (){
      console.log("guardar");
      const bodyPersona = {
        nombre: this.nombre,
        fechaNacimiento:this.fechaNacimientoISO,
        apellido: this.apellido
      };
      await insertarFachada(bodyPersona);
    },
   async actualizar() {
      console.log("Actualizar");
      const bodyPersona = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
      };
      await actualizarFachada(this.id, bodyPersona);
    },
    async actualizarParcial() {
      console.log("ActualizarParcial");
      const bodyPersona = {
        nombre: this.nombre,
      };
      await actualizarParcialFachada(this.id, bodyPersona);
    },
    async eliminar() {
      console.log("Eliminar");
      await eliminarFachada(this.id);
    },
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