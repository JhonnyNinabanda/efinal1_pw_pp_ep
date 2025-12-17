<template>
  <div>
    <p v-if="tipo === 'error'" class="rojo">
      Ha utilizado tus 5 intentos <br />
      El juego ha terminado, inténtelo otra vez
    </p>

    <p v-if="tipo === 'exito'" class="azul">
      Puntaje: {{ puntaje }} <br />
      Felicitaciones has ganado un premio de $10.000,00
    </p>
  </div>
</template>

<script>
export default {
  props: {
    tipo: String,
    puntaje: Number
  }
};
</script>

<style scoped>
.rojo {
  color: red;
}
.azul {
  color: blue;
}
</style>
