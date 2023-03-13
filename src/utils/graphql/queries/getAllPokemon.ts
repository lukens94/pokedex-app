import { graphql } from '../../../gql';

const GET_ALL_POKEMONS = graphql(/* GraphQL */ `
  query Pokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        dreamworld
        name
      }
    }
  }
`);

export default GET_ALL_POKEMONS;
