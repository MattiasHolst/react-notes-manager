import SearchBar from "components/SearchBar/SearchBar";
import NoteList from "containers/NoteList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NoteBrowse = () => {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredNoteList = noteList.filter((note) => {
    const containsTitle = note.title
      .toUpperCase()
      .includes(searchTerm.toUpperCase());
    const containsContent = note.content
      .toUpperCase()
      .includes(searchTerm.toUpperCase());
    return containsTitle || containsContent;
  });
  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">
          <SearchBar
            onTextChange={setSearchTerm}
            placeholder="Search your notes..."
          />
        </div>
      </div>

      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any note, do you want to{" "}
            <Link to="/note/new">create one</Link>
          </span>
        </div>
      )}
      <NoteList noteList={filteredNoteList} />
    </>
  );
};
export default NoteBrowse;
