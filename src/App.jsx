import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesPage from "./pages/NotesPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import { useEffect, useState } from "react";


const App = () => {

  // const [notes, setNotes] = useState(dummyNotes);
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("Notes")) || []);
  
  // Notes store to localStorage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesPage notes={notes} />} />
          <Route path="/create-note" element={<CreatePage setNotes={setNotes} />} />
          <Route path="edit-note/:id" element={<EditPage notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App