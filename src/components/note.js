import React from "react";
import "../styles/styles.css";
import DeleteIcon from "@material-ui/icons/Delete";

function NoteComp(props) {
  const { id, title, content, onDeleteNote } = props;
  return (
    <div key={id} className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          onDeleteNote(id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default NoteComp;
