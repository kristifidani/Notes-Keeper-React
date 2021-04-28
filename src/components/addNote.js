import React, { useState } from "react";
import MappingNotes from "./mappingNotes";
//Css
import "../styles/styles.css";
//Material UI
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function AddNoteForm() {
  //for input values
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  //note array
  const [notes, setNotes] = useState([]);

  //get input values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  //push notes in array
  const handleClick = (event) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    //reset input field
    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  };

  //delete note
  const deleteNote = (id) => {
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <form className="create-note" onSubmit={handleClick}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <hr />
        <textarea
          name="content"
          placeholder="Take a note.."
          onChange={handleChange}
          value={note.content}
          rows="3"
        />
        <Zoom in={true}>
          <button>
            <AddIcon />
          </button>
        </Zoom>
      </form>

      <MappingNotes notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default AddNoteForm;
