import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Movies from "./Pages/Movies";
import TvSeries from "./Pages/TvSeries";
import BookMark from "./Pages/BookMark";
import Root from "./Components/Root";
import Home from "./Pages/Home";
import { createContext, useState } from "react";
import { DataInterface } from "./assets/DataInterface";
import data from "../src/assets/data.json";

interface MyContextType {
  bookmarked: DataInterface[];
  setBookmarked: React.Dispatch<React.SetStateAction<DataInterface[]>>;
  showResults: boolean;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="tv-series" element={<TvSeries />} />
      <Route path="bookmarks" element={<BookMark />} />
    </Route>
  )
);

function App() {
  const [bookmarked, setBookmarked] = useState<DataInterface[]>(data);
  const [showResults, setShowResults] = useState<boolean>(false);

  return (
    <>
      <MyContext.Provider
        value={{ bookmarked, setBookmarked, showResults, setShowResults }}
      >
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
