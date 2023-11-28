import { useQuery, gql } from "@apollo/client";
const GET_POKEMON = gql`
  query pokemons($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
    }
  }
`;

export const usePokemon = (name?: string) => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: name },
  });

  return {
    loading,
    error,
    data,
  };
};
