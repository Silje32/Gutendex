import Favorites from "../favourites/Favorites.jsx";
import styles from "./Buttons.module.css";

function FavoritesButton() {
  function onButtonClick() {}

  return (
    <>
      <div className={styles.buttoncontainer1}>
        <button
          className={`${styles.mybutton} ${styles.favoritesbutton}`}
          onButtonClick={Favorites}
        >
          ❤️
        </button>
      </div>
    </>
  );
}

export default FavoritesButton;
