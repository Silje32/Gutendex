import BookItem from "../components/BookItem.jsx";

export default function BookList({ data: { book } }) {
  return (
    <ul>
      <BookItem />
    </ul>
  );
}
