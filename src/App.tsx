import "./App.scss";
import Pokecard from "./components/pokecard/pokecard.component";
import { useQuery, gql } from "@apollo/client";
import { IPokemonListItem } from "./models/i-pokemon-list-item";
const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
  limit: 50,
  offset: 0,
};

function App() {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div id="root" className="bg-dragonite-color p-10">
      <h1 className="mb-10 text-center text-5xl text-black">My Pokedex</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {data.pokemons.results.map(({ id, name, image }: IPokemonListItem) => (
          <Pokecard id={id} image={image} name={name} />
        ))}
      </div>
    </div>
  );
}

export default App;
