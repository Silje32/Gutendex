import { useState } from "react";

export default function FetchBooks(props) {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleBooks(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleBooks}>
        <input
          type="text"
          placeholder="Search Books..."
          onChange={(e) => setBooks(e.target.value)}
        ></input>
        <button type="submit">Search Icon</button>
        <button>Favorites Icon</button>
      </form>
    </div>
  );
}
