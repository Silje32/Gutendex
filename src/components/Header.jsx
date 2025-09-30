import { Link } from "react-router-dom";
import FetchBooks from "../components/FetchBooks.jsx";
import { useState } from "react";

export default function Header({ data: { searchBooks } }) {
  const [list, setList] = useState([]);
  return (
    <header>
      <nav>
        <Link to="/category/:categoryName">Fiction</Link>
        <Link to="/category/:categoryName">Mystery</Link>
        <Link to="/category/:categoryName">Thriller</Link>
        <Link to="/category/:categoryName">Romance</Link>
        <Link to="/category/:categoryName">Fantasy</Link>
        <Link to="/category/:categoryName">Morality</Link>
        <Link to="/category/:categoryName">Society</Link>
        <Link to="/category/:categoryName">Power</Link>
        <Link to="/category/:categoryName">Justice</Link>
        <Link to="/category/:categoryName">Adventure</Link>
        <Link to="/category/:categoryName">Tragedy</Link>
        <Link to="/category/:categoryName">War</Link>
        <Link to="/category/:categoryName">Philosophy</Link>
      </nav>

      <div>
        <Link to="/">GUTENDEX</Link>
      </div>
      <div>
        <FetchBooks />
      </div>
    </header>
  );
}
