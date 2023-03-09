import { gql } from 'graphql-request';

const GET_ALL_POKEMONS = /* GraphQL */ gql`
  query Pokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        image
        name
      }
    }
  }
`;

export default GET_ALL_POKEMONS;
