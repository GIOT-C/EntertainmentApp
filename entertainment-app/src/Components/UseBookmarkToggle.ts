import { useContext } from "react";
import { MyContext } from "../App";
import { DataInterface } from "../assets/DataInterface";

const UseBookmarkToggle = () => {
  const contextForChangeBookmark = useContext(MyContext);

  const toggleBookmark = (title: string) => {
    contextForChangeBookmark?.setBookmarked((prevMovies: DataInterface[]) =>
      prevMovies.map((movie) =>
        movie.title === title
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      )
    );
  };

  return { toggleBookmark };
};

export default UseBookmarkToggle;
