import { Link } from "react-router-dom";
import { FetchBooks, HeaderList } from "../index.jsx";
import { CategoryArray } from "../../data/CategoryArray.jsx";
import styles from "../header/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <Link className={styles.headerlink} to="/">
          GUTENDEX
        </Link>
      </div>
      <div>
        <HeaderList categories={CategoryArray} />
        <FetchBooks />
      </div>
    </>
  );
}
