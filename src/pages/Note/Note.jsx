import { useParams } from "react-router-dom"

const Note = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);
  return (
    <div>Note</div>
  )
}
export default Note