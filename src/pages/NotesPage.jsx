import { CiSearch } from "react-icons/ci"
import {MdClose} from "react-icons/md";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { useEffect, useState } from "react";

const NotesPage = ({ notes }) => {

  const [showSearch, setshowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filterNotes, setFilterNotes] = useState(notes);

  const handleSearch = () => {
    setFilterNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLowerCase())){
        return note;
      }
    }))
  };

  useEffect(handleSearch, [text]);

  return (
    <section>
      {/* Notes Page Header */}
      <header className="notes_header">
        {!showSearch && <h2>All Notes</h2>}
        {showSearch && <input type="text" autoFocus placeholder="keyword....." value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} />}
        <button className="btn" onClick={() => setshowSearch(prevState => !prevState)}>{showSearch ? <MdClose/> : <CiSearch/>}</button>
      </header>

      {/* Notes Page Main Container */}

      <div className="notes_container">
        {filterNotes.length <= 0 && <p style={{color: "rgba(255,255,255,0.4)"}}>No Notes Found...</p>}
        {filterNotes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    
      {/* Button to Add Notes */}
      <Link to={"/create-note"} className="btn add_btn" ><BsPlusLg/></Link>
    </section>
  )
}

export default NotesPage