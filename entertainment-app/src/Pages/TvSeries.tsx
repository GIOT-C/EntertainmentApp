import mainStyles from "./MainStyles.module.css";
import { useContext } from "react";
import { MyContext } from "../App";
import data from "../assets/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faCirclePlay,
  faMagnifyingGlass,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import UseBookmarkToggle from "../Components/UseBookmarkToggle";
import UseSearchResult from "../Components/UseSearchResult";
import SearchComponent from "../Components/SearchComponent";

function TvSeries() {
  const series = data.filter((series) => series.category === "TV Series");
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
  } = UseSearchResult(series);

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
          placeholder="Search for TV series"
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <h2 className={mainStyles.header}>TV Series</h2>

      {showResults ? (
        <SearchComponent
          searchedResult={searchedResult}
          numberOfResults={numberOfResults}
          searching={searching}
        />
      ) : (
        <div className={mainStyles.mainContainer}>
          {series.map((series) => (
            <div key={series.title} className={mainStyles.movieContainer}>
              <div
                className={mainStyles.bookmarkContainer}
                onClick={() => {
                  toggleBookmark(series.title);
                }}
              >
                {contextForChangeBookmark?.bookmarked.find(
                  (movie) => movie.title === series.title
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
                src={series.thumbnail.regular.medium}
                alt={series.title}
              />

              <div className={mainStyles.info}>
                <span>{series.year}</span>
                <div className={mainStyles.smallCircle} />
                <FontAwesomeIcon
                  icon={faTv}
                  className={mainStyles.tvSeriesIcon}
                />

                <span className={mainStyles.category}>{series.category}</span>
                <div className={mainStyles.smallCircle} />
                <span>{series.rating}</span>
              </div>
              <h3 className={mainStyles.title}>{series.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TvSeries;
