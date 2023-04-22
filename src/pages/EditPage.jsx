import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useParams } from "react-router-dom";
import { useState } from "react";
import useCreateDate from "../components/useCreateDate";

const EditPage = ({ notes, setNotes }) => {

  const {id} = useParams();
  
  // Check if id is match with notes id
  const note = notes.find(item => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  
  const navigate = useNavigate();
  const date = useCreateDate();


  const handleChange = (e) => {
    e.preventDefault();

    if(title && details) {
      // create new note object
      const newNote = {...note, title, details, date};
      const newNotes = notes.map(item => {
        if(item.id === id) {
          item = newNote;
        }
        return item;
      })
      setNotes(newNotes);
    }

    // redirect to Note page
    navigate("/");
    
  }

  const handleDeleteNote = () => {
    if(window.confirm("Are you want to delete note")){
      const newNotes = notes.filter(item => item.id !== id);
      setNotes(newNotes);
      navigate('/');
    }
  }

  return (
    <section>

      {/* Create Page Header */}
      <header className="create-note_header">
        <Link to={"/"}  className="btn">
          <IoIosArrowBack/>
        </Link>
        <button className="btn lg primary" onClick={handleChange} >Update</button>
        <button className="btn danger" onClick={handleDeleteNote}><RiDeleteBin6Line/></button>
      </header>

      {/* Create Page Edit Section */}
      <form className="create-note_form">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows="10" placeholder="Note details..." value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
      </form>

    </section>
  )
}

export default EditPage