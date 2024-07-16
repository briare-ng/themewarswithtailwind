function Card(props) {
  const infos = props.infos.data.map((prop, i) => {
    return (
      <div
        key={i}
        className={`${
          props.theme == "light" ? "text-neutral-200" : "text-neutral-800"
        } w-full flex justify-between`}
      >
        <span className="font-bold">{prop.label}</span>
        <span>{prop.value}</span>
      </div>
    );
  });

  return (
    <div
      className={`${
        props.theme == "light" ? "bg-neutral-800" : "bg-neutral-200"
      } w-full p-10 rounded-lg mt-5`}
    >
      <h3
        className={`${
          props.theme == "light" ? "text-neutral-200" : "text-neutral-800"
        } font-bold mb-5`}
      >
        {props.infos.title || props.infos.name}
      </h3>
      {infos}
    </div>
  );
}

export default Card;
