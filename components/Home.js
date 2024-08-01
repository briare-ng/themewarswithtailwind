import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSith } from "@fortawesome/free-brands-svg-icons";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { searchAPI } from "../functions/searchAPI";
import Card from "./Card";
import Form from "./Form";
// redux
import { changeTheme } from "../reducers/theme";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [searchResult, setSearchResult] = useState([]);
  // const [theme, setTheme] = useState("light");
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const handleThemeClick = () => {
    if (theme == "light") {
      // setTheme("dark");
      dispatch(changeTheme("dark"));
      console.log("change to dark");
    } else {
      // setTheme("light");
      dispatch(changeTheme("light"));
      console.log("change to light");
    }
  };

  const handleSearch = async (searchText) => {
    const result = await searchAPI(searchText);
    setSearchResult(result);
  };

  const cards = searchResult.map((data, i) => {
    return <Card key={i} infos={data} theme={theme} />;
  });

  return (
    <div
      id="main"
      className={`py-0 px-5 bg-top bg-no-repeat bg-cover w-screen min-h-screen relative ${
        theme === "light" ? "bg-light" : "bg-dark"
      } flex flex-col justify-center items-center transition-all bg-fixed`}
    >
      {/* TOGGLE THEME BUTTON */}
      <div className="rounded-full cursor-pointer border-none absolute top-6 right-6 w-[50px] h-[50px] bg-neutral-500">
        <button
          className={`flex justify-center items-center w-full h-full rounded-full -translate-y-[6px] active:-translate-y-[2px] ${
            theme === "light" ? " bg-neutral-800" : "bg-neutral-200"
          }`}
        >
          <FontAwesomeIcon
            icon={theme === "light" ? faJedi : faSith}
            className={`text-2xl ${
              theme === "light" ? " text-neutral-200" : "text-neutral-800"
            }`}
            onClick={handleThemeClick}
          />
        </button>
      </div>

      {/* TITLE */}
      <h1
        className={`text-center text-6xl m-10 ${
          theme === "light" ? " text-neutral-800" : "text-neutral-200"
        } font-starwars`}
      >
        THEME WARS
      </h1>

      {/* SEARCH */}
      <Form handleSearch={handleSearch} theme={theme} />

      {/* CARDS */}
      <div className="w-full sm:w-3/5 md:1/5 flex flex-col items-center">{cards}</div>
    </div>
  );
}

export default Home;
