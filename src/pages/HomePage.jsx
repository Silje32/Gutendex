import { BookList } from "../components/home/BookList.jsx";
import { useTempContext } from "../contex/tempContext.jsx";

export default function HomePage() {
  const { books } = useTempContext();

  return (
    <>
      <BookList books={books.results} />
    </>
  );
}
