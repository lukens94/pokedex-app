import { graphql } from '../../../gql';

const GET_SPECIFIC_POKEMON = graphql(/* GraphQL */ `
  query getPokemon($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      pokemon_species_id
      name
      is_default
      base_experience
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`);
export default GET_SPECIFIC_POKEMON;
