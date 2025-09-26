import { Link } from "react-router-dom";

export default function Header() {
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
        <Link to="/">Gutendex</Link>
      </div>

      <div>
        <form action="">
          <input type="text" placeholder="Search Books..."></input>
          <button>Search Icon</button>
          <button>Favorites Icon</button>
        </form>
      </div>
    </header>
  );
}
