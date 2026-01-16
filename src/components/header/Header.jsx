import { Link } from "react-router-dom";
import { FetchBooks, HeaderList } from "../components/index.jsx";
import { CategoryArray } from "../data/CategoryArray.jsx";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">GUTENDEX</Link>
      </div>
      <div>
        <HeaderList categories={CategoryArray} />
        <FetchBooks />
      </div>
    </header>
  );
}
