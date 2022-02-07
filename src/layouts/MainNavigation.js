import { useContext } from "react";
import { Link } from "react-router-dom";
import calasses from "./MainNavigation.module.css";
import FavoritesContext from "../store/favorites-context";
function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={calasses.header}>
      <div className={calasses.headline}>React Meetups :</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/Favorites">
              <span className={calasses.badge}>
                {favoriteCtx.totalFavorites}
              </span>
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
