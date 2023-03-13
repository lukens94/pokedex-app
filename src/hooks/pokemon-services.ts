import { useQuery } from '@tanstack/react-query';

import { GetPokemonListQuery } from '../gql/graphql';
import client from '../utils/graphql/client';
import GET_ALL_POKEMONS from '../utils/graphql/queries/getAllPokemon';
import GET_SPECIFIC_POKEMON from '../utils/graphql/queries/getPokemon';

interface GetPokemonsParams {
  limit?: number;
  offset?: number;
}

export const useGetPokemons = (
  params: GetPokemonsParams = {},
  initialData: GetPokemonListQuery
) => {
  const { limit = 20, offset = 0 } = params;
  return useQuery({
    queryKey: ['allPokemons'],
    queryFn: () => client.request(GET_ALL_POKEMONS, { limit, offset }),
    initialData,
  });
};

export const useGetPokemonById = (id: number) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => client.request(GET_SPECIFIC_POKEMON, { id }),
  });
};
