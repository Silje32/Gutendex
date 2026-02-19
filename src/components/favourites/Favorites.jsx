import { useState, useEffect } from "react";
import styles from "../favourites/Favorites.module.css";

export default function Favorites() {
  // Lagre favoritter i localStorage

  useEffect(() => {
    localStorage.setItem("storedFavorites", JSON.stringify(storedFavorites));
  }, [storedFavorites]);

  // Hente favoritter fra localStorage
  const [storedFavorites, setStoredFavorites] = useState(() => {
    const savedData = localStorage.getItem("storedFavorites");
    return savedData ? JSON.parse(savedData) : [];
  });

  return (
    <>
      <div>
        <h1 className={styles.myfavorites}>MY FAVORITE BOOKS</h1>
      </div>
    </>
  );
}
