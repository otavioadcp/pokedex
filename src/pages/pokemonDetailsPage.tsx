import { useParams } from "react-router";
import { usePokemon } from "../hooks/usePokemon";

function PokemonDetailsPage() {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading } = usePokemon(id);

  if (loading) return <h1>Loading details...</h1>;

  return (
    <div className="justify-center text-center">
      <h1>{data.pokemon.name}</h1>
      <img
        className="mx-auto w-[10rem]"
        src={data.pokemon.sprites.front_default}
      />
      <ul>
        {data.pokemon.types.map((item: { type: { name: string } }) => (
          <li className="text-2xl">{item.type.name || "None"}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetailsPage;
