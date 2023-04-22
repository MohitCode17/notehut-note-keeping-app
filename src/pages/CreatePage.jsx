import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { useState } from "react";
import { v4 as uuid } from "uuid"

import useCreateDate from "../components/useCreateDate";

const CreatePage = ({ setNotes }) => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && details) {
      const note = {
        id: uuid(),
        title,
        details,
        date,
      }
      // Add notes to notes array state which is on root level
      setNotes(prevData => [note, ...prevData]);

      // Redirect to All Notes Page
      navigate("/");
    }
  }

  return (
    <section>

      {/* Create Page Header */}
      <header className="create-note_header">
        <Link to={"/"}  className="btn">
          <IoIosArrowBack/>
        </Link>
        <button className="btn lg primary" onClick={handleSubmit} >Save</button>
      </header>

      {/* Create Page Edit Section */}
      <form className="create-note_form" onSubmit={handleSubmit} >
        <input type="text" placeholder="Title" autoFocus onChange={(e) => setTitle(e.target.value)} name="title" value={title} />
        <textarea rows="10" placeholder="Note details..." onChange={(e) => setDetails(e.target.value)} name="details" value={details}></textarea>
      </form>

    </section>
  )
}

export default CreatePage