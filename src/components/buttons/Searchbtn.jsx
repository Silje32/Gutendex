import FetchBooks from "../../components/header/FetchBooks.jsx";
import styles from "./Buttons.module.css";

function SearchButton() {
  function onButtonClick() {}

  return (
    <>
      <div className={styles.buttoncontainer2}>
        <button
          className={`${styles.mybutton} ${styles.searchbutton}`}
          type="submit"
          onButtonClick={FetchBooks}
        ></button>
      </div>
    </>
  );
}

export default SearchButton;
