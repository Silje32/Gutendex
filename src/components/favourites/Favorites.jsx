import { useState, useEffect } from "react";
import styles from "../favourites/Favorites.module.css";

export default function Favorites() {
  // Lagre favoritter i localStorage
  useEffect(() => {
    const storedFavorites = localStorage.setItem(
      "storedFavorites",
      JSON.stringify(storedFavorites),
    );
    if (storedFavorites) {
      setStoredFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Hente favoritter fra localStorage
  const [storedFavorites, setStoredFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("storedFavorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  return (
    <>
      <div>
        <h1 className={styles.myfavorites}>MY FAVORITE BOOKS</h1>
      </div>
    </>
  );
}
