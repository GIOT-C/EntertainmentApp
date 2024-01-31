import mainStyles from "../Pages/MainStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faFilm,
  faCirclePlay,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { MyContext } from "../App";
import { DataInterface } from "../assets/DataInterface";
import UseBookmarkToggle from "../Components/UseBookmarkToggle";

interface Props {
  searchedResult: DataInterface[] | null;
  numberOfResults: number;
  searching: string;
}

function SearchComponent(props: Props) {
  const contextForChangeBookmark = useContext(MyContext);
  const { toggleBookmark } = UseBookmarkToggle();

  return (
    <div>
      <h2 className={mainStyles.foundInfo}>
        Found {props.numberOfResults} results for '{props.searching}'
      </h2>

      <div className={mainStyles.mainContainer}>
        {props.searchedResult &&
          props.searchedResult.map((result) => (
            <div key={result.title} className={mainStyles.movieContainer}>
              <div
                className={mainStyles.bookmarkContainer}
                onClick={() => {
                  toggleBookmark(result.title);
                }}
              >
                {contextForChangeBookmark?.bookmarked.find(
                  (movie) => movie.title === result.title
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
                src={result.thumbnail.regular.medium}
                alt={result.title}
              />

              <div className={mainStyles.info}>
                <span>{result.year}</span>
                <div className={mainStyles.smallCircle} />

                {result.category === "Movie" ? (
                  <FontAwesomeIcon
                    icon={faFilm}
                    className={mainStyles.moviesIcon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faTv}
                    className={mainStyles.tvSeriesIcon}
                  />
                )}

                <span className={mainStyles.category}>{result.category}</span>
                <div className={mainStyles.smallCircle} />
                <span>{result.rating}</span>
              </div>
              <h3 className={mainStyles.title}>{result.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchComponent;
