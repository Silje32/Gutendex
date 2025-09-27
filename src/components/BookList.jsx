import BookItem from "./BookItem.jsx";

export default function BookList({ data: { books } }) {
  return (
    <ul>
      <BookItem />
    </ul>
  );
}
