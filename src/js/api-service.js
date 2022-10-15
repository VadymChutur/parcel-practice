const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemonResponse(pokemonId) {
  const url = `${BASE_URL}/pokemon/${pokemonId}`;
  return fetch(url).then(response => response.json());
}

export default { fetchPokemonResponse };
