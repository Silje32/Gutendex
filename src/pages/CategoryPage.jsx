import { useParams } from "react-router-dom";

export default function Category() {
  const { CategoryName } = useParams();
  console.log(CategoryName);

  return (
    <div>
      <h1>{CategoryName}</h1>
    </div>
  );
}
