import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function FetchBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://gutendex.com/books");
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error.status ${response.status}`);
        }
        const result = await response.json();
        setBooks(result);
        console.log(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Stops the page from reloading
  function handleBooks(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.header}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {books && (
        <form onSubmit={handleBooks}>
          <input
            type="text"
            placeholder="Search Books..."
            onChange={(e) => setBooks(e.target.value)}
          />
          <button type="submit">Search</button>
          <button>Favorites</button>
        </form>
      )}
    </div>
  );
}
