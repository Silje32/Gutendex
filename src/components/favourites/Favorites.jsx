import { useState, useEffect } from "react";
import styles from "../favourites/Favorites.module.css";

export default function Favorites() {
  // Lagre favoritter i localStorage

  const [storedFavorites, setStoredFavorites] = useState([]);
  useEffect(() => {
    const savedData = localStorage.getItem("storedFavorites");

    if (!savedData) {
      localStorage.setItem("storedFavorites", JSON.stringify(storedFavorites));
    }
  }, [storedFavorites]);

  // Hente favoritter fra localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("storedFavorites");
  }, []);
  return (
    <div>
      <h1 className={styles.myfavorites}>MY FAVORITE BOOKS</h1>
    </div>
  );
}
