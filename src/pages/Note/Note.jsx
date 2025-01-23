import { deleteById, updateById } from "api/note-api";
import NoteForm from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, updateNote } from "store/notes/notes-slice";

const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === id)
  );
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleSubmit = async (formValues) => {
    const updatedNote = await updateById(note.id, formValues);
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  };

  const handleDelete = async () => {
    if (window.confirm("Delete note?")) {
      await deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  };
  return (
    <>
      {note && (
        <NoteForm
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={handleEditClick}
          onClickDelete={handleDelete}
          isEditable={isEditable}
          onSubmit={isEditable && handleSubmit}
        />
      )}
    </>
  );
};
export default Note;
