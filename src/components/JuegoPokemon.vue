<template>
  <div>
    <h1>Juego Pokémon</h1>

    <div class="tablero">
      <PokemonCard
        v-for="(p, index) in pokemons"
        :key="index"
        :imagen="p.imagen"
        :nombre="p.nombre"
      />
    </div>

    <button @click="jugar" :disabled="intentos >= 5 || puntaje >= 10">
      JUGAR
    </button>

    <p>Intentos: {{ intentos }}</p>
    <p>Puntaje: {{ puntaje }}</p>

    <MensajeJuego :tipo="mensaje" :puntaje="puntaje" />
  </div>
</template>

<script>
import PokemonCard from "./PokemonCard.vue";
import MensajeJuego from "./MensajeJuego.vue";
import { obtenerPokemon } from "../services/pokemonService";

export default {
  components: {
    PokemonCard,
    MensajeJuego
  },
  data() {
    return {
      pokemons: [
        { imagen: "https://placehold.co/200x200/000000/000000.png", nombre: "XXXXXXXX" },
        { imagen: "https://placehold.co/200x200/000000/000000.png", nombre: "XXXXXXXX" },
        { imagen: "https://placehold.co/200x200/000000/000000.png", nombre: "XXXXXXXX" }
      ],
      intentos: 0,
      puntaje: 0,
      mensaje: null,
      pool: [1, 4, 7, 25] // conjunto fijo de 4 Pokémon
    };
  },
  methods: {
    async jugar() {
      this.intentos++;

      const ids = Array.from({ length: 3 }, () =>
        this.pool[Math.floor(Math.random() * this.pool.length)]
      );

      const resultados = await Promise.all(
        ids.map(id => obtenerPokemon(id))
      );

      this.pokemons = resultados;

      this.calcularPuntaje(ids);
      this.verificarFin();
    },
    calcularPuntaje(ids) {
      const counts = {};
      ids.forEach(id => counts[id] = (counts[id] || 0) + 1);

      if (Object.values(counts).includes(3)) this.puntaje += 5;
      else if (Object.values(counts).includes(2)) this.puntaje += 2;
    },
    verificarFin() {
      if (this.puntaje >= 10) {
        this.mensaje = "exito";
      } else if (this.intentos >= 5) {
        this.mensaje = "error";
      }
    }
  }
};
</script>

<style scoped>
.tablero {
  display: flex;
  gap: 20px;
  justify-content: center;
}
button {
  margin: 20px;
}
</style>
