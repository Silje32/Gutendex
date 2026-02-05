import { useState, useEffect } from "react";
import FavoritesButton from "../buttons/Favoritesbutton";
import styles from "../buttons/Buttons.module.css";
import { useTempContext } from "../../contex/tempContext";

export default function FetchBooks() {
  const [books, setBooks] = useTempContext();
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
        console.log("se her!!!", result);
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
    <>
      <div className={styles.searchcontainer}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {books && (
          <form onSubmit={handleBooks}>
            <input
              type="text"
              placeholder="Search Books..."
              onChange={(e) => setBooks(e.target.value)}
            />
            <input
              type="submit"
              value="Search"
              className={styles.searchbutton}
            />
          </form>
        )}
      </div>
      <div>
        <FavoritesButton />
      </div>
    </>
  );
}
