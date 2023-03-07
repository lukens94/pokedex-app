import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetPokemons = () => {
  return useQuery(['allPokemons'], async () => {
    return await axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.data)
      .catch((res) => res);
  });
};

export const useGetPokemonById = (id: number) => {
  return useQuery(['pokemon', id], async () => {
    return await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.data)
      .catch((res) => res);
  });
};
