import { Link } from "react-router-dom";
import Favorites from "../favourites/Favorites.jsx";
import styles from "./Buttons.module.css";

function FavoritesButton() {
  function onClick() {}

  return (
    <>
      <div className={styles.buttoncontainer1}>
        <Link to={"/favorites"}>
          <button
            className={`${styles.mybutton} ${styles.favoritesbutton}`}
            onClick={onClick}
          >
            ❤️
          </button>
        </Link>
      </div>
    </>
  );
}

export default FavoritesButton;
