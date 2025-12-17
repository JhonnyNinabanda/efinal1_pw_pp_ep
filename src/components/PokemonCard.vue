<template>
  <div class="card">
    <img :src="imagen" />
    <p>{{ nombre }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imagen: String,
    nombre: String
  }
};
</script>

<style scoped>
.card {
  width: 200px;
  text-align: center;
}
img {
  width: 200px;
  height: 200px;
}
p {
  font-weight: bold;
}
</style>
