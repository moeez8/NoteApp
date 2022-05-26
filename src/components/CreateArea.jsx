import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleNoteChange(event) {
    setNote(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleNoteChange}
          value={note}
        />
        <button type="button" onClick={() => props.onAdd(title, note)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
