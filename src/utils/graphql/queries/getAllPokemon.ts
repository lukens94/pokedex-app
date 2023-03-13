import { graphql } from '../../../gql';

const GET_ALL_POKEMONS = graphql(/* GraphQL */ `
  query getPokemonList($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      pokemon_species_id
      name
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

export default GET_ALL_POKEMONS;
