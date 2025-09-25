import { useParams } from "react-router-dom";

export default function Category() {
  const { categoryName } = useParams();
  console.log(categoryName);

  return (
    <div>
      <h1>Category {categoryName}</h1>
    </div>
  );
}
