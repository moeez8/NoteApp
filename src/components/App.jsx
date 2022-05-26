import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuid } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNote(noteTitle, noteContent) {
    setNotes((prev) => {
      return [...prev, { id: uuid(), title: noteTitle, content: noteContent }];
    });
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return notes.filter((note) => {
        return note.id != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
