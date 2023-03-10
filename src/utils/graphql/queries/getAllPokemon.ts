import { gql } from 'graphql-request';

const GET_ALL_POKEMONS = gql`
  query Pokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        dreamworld
        name
      }
    }
  }
`;

export default GET_ALL_POKEMONS;
