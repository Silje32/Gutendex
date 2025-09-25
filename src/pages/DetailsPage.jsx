import { useParams } from "react-router-dom";

export default function Details() {
  const { detailsId } = useParams();
  console.log(detailsId);

  return (
    <div>
      <h1>Details {detailsId}</h1>
    </div>
  );
}
