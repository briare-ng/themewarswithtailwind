import { useState } from "react";

function Form(props) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(searchText);
    setSearchText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-3/5 lg:2/5 flex justify-center align-center"
    >
      <div className="bg-neutral-500 md:w-4/5 rounded-lg">
        <input
          className={`${
            props.theme == "light"
              ? "caret-neutral-200 w-full text-neutral-200 border-neutral-800 bg-neutral-800"
              : "caret-neutral-800 w-full text-neutral-800 border-neutral-200 bg-neutral-200"
          }  -translate-y-[6px] rounded-lg p-3 font-bold outline-none`}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          autoFocus
        />
      </div>

      <div className="bg-neutral-500 sm:w-1/5 rounded-lg ml-2">
        <button
          type="submit"
          className={`${
            props.theme == "light"
              ? "border-neutral-800 bg-neutral-800 text-neutral-200"
              : "border-neutral-200 bg-neutral-200 text-neutral-800"
          } w-full -translate-y-[6px] active:-translate-y-[2px] border-l border-solid font-bold rounded-lg  p-3`}
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}

export default Form;
