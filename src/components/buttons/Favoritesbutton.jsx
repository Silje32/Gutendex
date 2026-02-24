import { Link } from "react-router-dom";
import Favorites from "../favourites/Favorites.jsx";
import styles from "./Buttons.module.css";

function FavoritesButton() {
  function onClick() {}

  return (
    <div>
      <Link to={"/favorites"}>
        <button className={styles.favoritesbutton} onClick={onClick}>
          ❤️
        </button>
      </Link>
    </div>
  );
}

export default FavoritesButton;
