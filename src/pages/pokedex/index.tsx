import { useGetPokemonById, useGetPokemons } from '../../hooks/pokemon-services';

export default function Pokedex() {
  const { data: allPokemons } = useGetPokemons();
  const { data: pokemon } = useGetPokemonById(2);
  console.log({ allPokemons, pokemon });

  return <></>;
}
