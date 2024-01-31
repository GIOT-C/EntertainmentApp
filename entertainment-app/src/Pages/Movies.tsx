import mainStyles from "./MainStyles.module.css";
import { useContext } from "react";
import { MyContext } from "../App";
import data from "../assets/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faCirclePlay,
  faMagnifyingGlass,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import UseBookmarkToggle from "../Components/UseBookmarkToggle";
import UseSearchResult from "../Components/UseSearchResult";
import SearchComponent from "../Components/SearchComponent";

function Movies() {
  const movies = data.filter((movie) => movie.category === "Movie");
  const contextForChangeBookmark = useContext(MyContext);
  const { toggleBookmark } = UseBookmarkToggle();

  const {
    handleSearch,
    handleKeyPress,
    searchedResult,
    showResults,
    numberOfResults,
    searching,
    setSearching,
  } = UseSearchResult(movies);

  return (
    <div className={mainStyles.parent}>
      <div className={mainStyles.searchContainer}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={mainStyles.searchIcon}
          onClick={handleSearch}
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for movies"
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <h2 className={mainStyles.header}>Movies</h2>

      {showResults ? (
        <SearchComponent
          searchedResult={searchedResult}
          numberOfResults={numberOfResults}
          searching={searching}
        />
      ) : (
        <div className={mainStyles.mainContainer}>
          {movies.map((movies) => (
            <div key={movies.title} className={mainStyles.movieContainer}>
              <div
                className={mainStyles.bookmarkContainer}
                onClick={() => {
                  toggleBookmark(movies.title);
                }}
              >
                {contextForChangeBookmark?.bookmarked.find(
                  (movie) => movie.title === movies.title
                )?.isBookmarked ? (
                  <FontAwesomeIcon
                    icon={solidBookmark}
                    className={mainStyles.bookMarkIcon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={regularBookmark}
                    className={mainStyles.bookMarkIcon}
                  />
                )}
              </div>

              <div className={mainStyles.containerForPlay}>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={mainStyles.playIcon}
                />
                <span>Play</span>
              </div>

              <img
                className={mainStyles.image}
                src={movies.thumbnail.regular.medium}
                alt={movies.title}
              />

              <div className={mainStyles.info}>
                <span>{movies.year}</span>
                <div className={mainStyles.smallCircle} />

                <FontAwesomeIcon
                  icon={faFilm}
                  className={mainStyles.moviesIcon}
                />

                <span className={mainStyles.category}>{movies.category}</span>
                <div className={mainStyles.smallCircle} />
                <span>{movies.rating}</span>
              </div>
              <h3 className={mainStyles.title}>{movies.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
