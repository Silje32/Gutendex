import FavoritesButton from "../buttons/Favoritesbutton";
import styles from "./BookList.module.css";

export default function BookItem({ title, authors, formats, summaries }) {
  return (
    <>
      <div>
        <FavoritesButton />
      </div>
      <li>
        <h1>{title}</h1>
        {authors.map((author) => (
          <h2>{authors.name}</h2>
        ))}
        <img src={formats["image/jpeg"]} alt={title} />
        <p>{summaries}</p>
      </li>
    </>
  );
}
