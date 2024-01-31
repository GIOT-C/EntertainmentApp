import { useState, useContext } from "react";
import { DataInterface } from "../assets/DataInterface";
import { MyContext } from "../App";

const UseSearchResult = (category: DataInterface[]) => {
  const contextForshowResults = useContext(MyContext);

  const [searching, setSearching] = useState<string>("");
  const [searchedResult, setSearchedResult] = useState<DataInterface[] | null>(
    null
  );
  const [numberOfResults, setNumberOfResults] = useState<number>(0);
  const showResults = contextForshowResults?.showResults || false;
 

  const handleSearch = () => {
    const searchTerm = searching.trim().toLowerCase();

    if (searchTerm === "") {
      setSearchedResult(null);
      return;
    }

    const result = category.filter((content) =>
      content.title.toLowerCase().includes(searchTerm)
    );

    setSearchedResult(result.length > 0 ? result : null);
    contextForshowResults?.setShowResults(true);
    setNumberOfResults(result.length);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return {
    handleSearch,
    searchedResult,
    showResults,
    numberOfResults,
    searching,
    setSearching,
    handleKeyPress,
  };
};

export default UseSearchResult;
