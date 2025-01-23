import NoteForm from "components/NoteForm/NoteForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Note = () => {
  const { id } = useParams();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === id)
  );
  return (
    <>
      {note && (
        <NoteForm
          title={note.title}
          note={note}
          onClickEdit={() => console.log("edit")}
          onClickDelete={() => console.log("delete")}
          isEditable={false}
        />
      )}
    </>
  );
};
export default Note;
