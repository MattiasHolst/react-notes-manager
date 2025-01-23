import { updateById } from "api/note-api";
import NoteForm from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateNote } from "store/notes/notes-slice";

const Note = () => {
  const { id } = useParams();
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
  return (
    <>
      {note && (
        <NoteForm
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={handleEditClick}
          onClickDelete={() => console.log("delete")}
          isEditable={isEditable}
          onSubmit={isEditable && handleSubmit}
        />
      )}
    </>
  );
};
export default Note;
