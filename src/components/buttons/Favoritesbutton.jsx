import { Link } from "react-router-dom";
import Favorites from "../favourites/Favorites.jsx";
import styles from "./Buttons.module.css";

function FavoritesButton() {
  function onClick() {}

  return (
    <>
      <Link to={"/favorites"}>
        <button className={styles.favoritesbutton} onClick={onClick}>
          ❤️
        </button>
      </Link>
    </>
  );
}

export default FavoritesButton;
