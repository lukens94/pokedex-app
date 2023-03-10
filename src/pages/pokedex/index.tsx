import { InputText } from '../../components/atoms/InputText/InputText';
import { useGetPokemonById, useGetPokemons } from '../../hooks/pokemon-services';
import style from './Pokedex.module.scss';

export default function Pokedex() {
  const { data: allPokemons } = useGetPokemons();
  const { data: pokemon } = useGetPokemonById('bulbasaur');
  console.log({ allPokemons, pokemon });

  return (
    <div className={style.Pokedex}>
      <h2>
        800 <b>Pokemons</b> for you to choose your favorite
      </h2>
      <InputText placeholder="Cerca il tuo Pokemon" />
    </div>
  );
}
