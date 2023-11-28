import { Link } from "react-router-dom";

interface Props {
  id?: string;
  name?: string;
  image?: string;
}

function Pokecard(props: Props): React.ReactElement {
  return (
    <Link
      to={`${props.name?.toLowerCase()}`}
      className="flex-row gap-2 rounded-xl border border-solid border-slate-900  p-6 text-center shadow-lg duration-100 ease-linear	hover:scale-105 hover:shadow-2xl"
      style={{ backgroundColor: "#eebd8b" }}
    >
      <img className="mx-auto w-2/4" src={props.image} />
      <div>
        <h2 className="text-lg font-medium capitalize tracking-wide text-black">
          {props.name || "None"}
        </h2>
      </div>
    </Link>
  );
}

export default Pokecard;
