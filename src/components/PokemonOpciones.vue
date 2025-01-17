<template>
  <div class="options-container">
    <ul>
      <li>Opcion 1</li>
      <li>Opcion 2</li>
      <li>Opcion 3</li>
      <li>Opcion 4</li>
    </ul>
  </div>
</template>

<script>
export default {};
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
  background: rgba(0,0,0,0.05);
}
.options-container {
  display: flex;
  justify-content: center;
}
</style> 