import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { InputText } from '../../components/atoms/InputText/InputText';
import { GetPokemonListQuery } from '../../gql/graphql';
import { useGetPokemonById, useGetPokemons } from '../../hooks/pokemon-services';
import client from '../../utils/graphql/client';
import GET_ALL_POKEMONS from '../../utils/graphql/queries/getAllPokemon';
import style from './Pokedex.module.scss';

export const getStaticProps: GetStaticProps = async () => {
  const variables = { limit: 20, offset: 0 };
  const allPokemons = await client.request(GET_ALL_POKEMONS, variables);

  return {
    props: {
      allPokemons,
    },
  };
};

export default function Pokedex(results: GetPokemonListQuery) {
  const {
    data: { pokemon_v2_pokemon: allPokemons },
  } = useGetPokemons({}, results);

  console.log(allPokemons);

  const { data: pokemon } = useGetPokemonById(1);

  return (
    <div className={style.Pokedex}>
      <h2>
        800 <b>Pokemons</b> for you to choose your favorite
      </h2>
      <InputText placeholder="Cerca il tuo Pokemon" />
    </div>
  );
}
