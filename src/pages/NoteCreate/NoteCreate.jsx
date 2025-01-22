import { create } from "api/note-api";
import NoteForm from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "store/notes/notes-slice";

const NoteCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (formValues) => {
    const createdNote = await create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch(addNote(createdNote));
    navigate("/");
  };
  return (
    <>
      <NoteForm title="New note" onSubmit={handleSubmit} />
    </>
  );
};
export default NoteCreate;
