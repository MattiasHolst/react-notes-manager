import { fetchAll } from "api/note-api";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";

export function App() {
  const dispatch = useDispatch();
  const fetchAllNotes = async () => {
    const noteList = await fetchAll();
    dispatch(setNoteList(noteList));
  };

  useEffect(() => {
    fetchAllNotes();
  });
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
