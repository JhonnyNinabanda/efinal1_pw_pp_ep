import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function obtenerPokemon(id) {
  const response = await axios.get(`${BASE_URL}${id}`);
  return {
    nombre: response.data.name,
    imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  };
}
