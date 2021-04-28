import React from "react";
import NoteComp from "./note";

function MappingNotes(props) {
  const { notes, onDeleteNote } = props;
  return (
    <div>
      {notes.map((note, index) => (
        <NoteComp
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDeleteNote={onDeleteNote}
        />
      ))}
    </div>
  );
}

export default MappingNotes;
