import styles from "./Root.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import logo from "../assets/logo/logo.svg";
import user from "../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../App";

function Root() {
  const [selectMarked, setSelectMarked] = useState<string>("home");
  const contextForshowResults = useContext(MyContext);

  const handleNavigation = (nav: string) => {
    setSelectMarked(nav);
    contextForshowResults?.setShowResults(false);
  };

  return (
    <>
      <div className={styles.parent}>
        <nav className={styles.navigation}>
          <div>
            <Link
              to="/"
              onClick={() => {
                handleNavigation("home");
              }}
            >
              <img className={styles.logo} src={logo} alt="logo" />
            </Link>
          </div>

          <div className={styles.navIconsContainer}>
            <div className={styles.iconBox}>
              <Link
                className={
                  selectMarked === "home" ? styles.selectedLink : styles.link
                }
                to="/"
                onClick={() => {
                  handleNavigation("home");
                }}
              >
                <FontAwesomeIcon icon={faHouse} className={styles.homeIcon} />
              </Link>
            </div>

            <div className={styles.iconBox}>
              <Link
                className={
                  selectMarked === "movies" ? styles.selectedLink : styles.link
                }
                to="/movies"
                onClick={() => {
                  handleNavigation("movies");
                }}
              >
                <FontAwesomeIcon icon={faFilm} className={styles.moviesIcon} />
              </Link>
            </div>

            <div className={styles.iconBox}>
              <Link
                className={
                  selectMarked === "tv-series"
                    ? styles.selectedLink
                    : styles.link
                }
                to="/tv-series"
                onClick={() => {
                  handleNavigation("tv-series");
                }}
              >
                <FontAwesomeIcon icon={faTv} className={styles.tvSeriesIcon} />
              </Link>
            </div>

            <div className={styles.iconBox}>
              <Link
                className={
                  selectMarked === "bookMarks"
                    ? styles.selectedLink
                    : styles.link
                }
                to="/bookmarks"
                onClick={() => {
                  handleNavigation("bookMarks");
                }}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  className={styles.bookMarkIcon}
                />
              </Link>
            </div>
          </div>

          <img className={styles.user} src={user} alt="user" />
        </nav>

        <div className={styles.body}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;

