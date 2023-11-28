interface Props {
  id?: string;
  name?: string;
  image?: string;
}

function Pokecard(props: Props): React.ReactElement {
  return (
    <div
      className="flex-row gap-2 rounded-xl border border-solid border-slate-900  p-6 text-center"
      style={{ backgroundColor: "#eebd8b" }}
    >
      <img className="mx-auto w-2/4" src={props.image} />
      <div>
        <h2 className="text-lg font-medium capitalize">
          {props.name || "None"}
        </h2>
      </div>
    </div>
  );
}

export default Pokecard;
