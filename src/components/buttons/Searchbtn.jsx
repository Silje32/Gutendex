import FetchBooks from "../../components/header/FetchBooks.jsx";
import styles from "./Buttons.module.css";

function SearchButton() {
  function onClick() {}

  return (
    <>
      <div className={styles.buttoncontainer2}>
        <button
          className={`${styles.mybutton} ${styles.searchbutton}`}
          type="submit"
          onClick={FetchBooks}
        ></button>
      </div>
    </>
  );
}

export default SearchButton;
