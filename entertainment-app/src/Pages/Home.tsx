import mainStyles from "./MainStyles.module.css";
import TrendingForHomePage from "../ComponentsForPages/TrendingForHomePage";
import RecomendedForHomePage from "../ComponentsForPages/RecomendedForHomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UseSearchResult from "../Components/UseSearchResult";
import data from "../assets/data.json";
import SearchComponent from "../Components/SearchComponent";

function Home() {
  const {
    handleSearch,
    handleKeyPress,
    searchedResult,
    showResults,
    numberOfResults,
    searching,
    setSearching,
  } = UseSearchResult(data);

  return (
    <div className={mainStyles.parent}>
      <div className={mainStyles.searchContainer}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={mainStyles.searchIcon}
          onClick={handleSearch}
        />
        <div className={mainStyles.inputContainer}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for movies or TV series"
            value={searching}
            onChange={(e) => setSearching(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>

      {showResults ? (
        <SearchComponent
          searchedResult={searchedResult}
          numberOfResults={numberOfResults}
          searching={searching}
        />
      ) : (
        <div>
          <TrendingForHomePage />
          <RecomendedForHomePage />
        </div>
      )}
    </div>
  );
}

export default Home;
