import Pokecard from "../../components/pokecard/pokecard.component";
import { IPokemonListItem } from "../../models/i-pokemon-list-item";
import { usePokemonList } from "../../hooks/usePokemonList";

function PokemonListPage() {
  const { loading, error, data } = usePokemonList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1 className="mb-10 text-center text-5xl text-black">My Pokedex</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {data.pokemons.results.map(({ id, name, image }: IPokemonListItem) => (
          <Pokecard key={id} id={id} image={image} name={name} />
        ))}
      </div>
    </>
  );
}

export default PokemonListPage;
