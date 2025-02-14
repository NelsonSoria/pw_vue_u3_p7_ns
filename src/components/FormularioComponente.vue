<template>
  <div class="container">
    <div class="container-formulario">
      <p type="Nombre:"><input type="text" /></p>
      <p type="Fecha Nacimiento:"><input type="date" /></p>
      <p type="Apellido:"><input type="text" /></p>
    </div>
  </div>
</template>

<script>
import { obtenerPorIdFachada } from "@/client/PersonaClient.js";
export default {};
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