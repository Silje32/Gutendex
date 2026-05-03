import Favorites from "../favourites/Favorites.jsx";
import styles from "./Buttons.module.css";

function FavoritesButton({ onClick }) {
  function handleClick() {
    onClick?.();
    window.location.href = "/favorites";
  }

  return (
    <div>
      <button className={styles.favoritesbutton} onClick={handleClick}>
        ❤️
      </button>
    </div>
  );
}

export default FavoritesButton;
