import NoteForm from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Note = () => {
  const { id } = useParams();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === id)
  );
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleSubmit = (formValues) => {

  }
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
