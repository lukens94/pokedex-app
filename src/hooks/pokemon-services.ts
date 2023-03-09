import { useQuery } from '@tanstack/react-query';

import client from '../utils/graphql/client';
import GET_ALL_POKEMONS from '../utils/graphql/queries/getAllPokemon';
import GET_SPECIFIC_POKEMON from '../utils/graphql/queries/getPokemon';

interface GetPokemonsParams {
  limit?: number;
  offset?: number;
}

export const useGetPokemons = (params: GetPokemonsParams = {}) => {
  const { limit = 20, offset = 0 } = params;
  return useQuery(['allPokemons'], async () => {
    return await client.request(GET_ALL_POKEMONS, { limit, offset });
  });
};

export const useGetPokemonById = (name: string) => {
  return useQuery(['pokemon', name], async () => {
    return await client.request(GET_SPECIFIC_POKEMON, { name });
  });
};
