import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { InputText } from '../../components/atoms/InputText/InputText';
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

export default function Pokedex(results: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    data: { pokemons: allPokemons },
  } = useGetPokemons({}, results);

  return (
    <div className={style.Pokedex}>
      <h2>
        800 <b>Pokemons</b> for you to choose your favorite
      </h2>
      <InputText placeholder="Cerca il tuo Pokemon" />
    </div>
  );
}
