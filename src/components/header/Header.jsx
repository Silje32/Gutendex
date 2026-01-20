import { Link } from "react-router-dom";
import { FetchBooks, HeaderList } from "../index.jsx";
import { CategoryArray } from "../../data/CategoryArray.jsx";

export default function Header() {
  return (
    <>
      <div>
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
