import React from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import TextCard from "components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import { deleteById } from "api/note-api";
import { deleteNote } from "store/notes/notes-slice";
const NoteList = ({ noteList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteNote = async (note) => {
    if (window.confirm("Delete node?")) {
      await deleteById(note.id);
      dispatch(deleteNote(note));
    }
  };

  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div key={note.id} className={s.card_container}>
            <TextCard
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => handleDeleteNote(note)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
