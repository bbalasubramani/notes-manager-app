import React, { useState } from 'react';

function NoteItem({ note, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    description: note.description,
  });

  const handleEditChange = (e) => {
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdate(note._id, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedNote.title}
            onChange={handleEditChange}
          />
          <textarea
            name="description"
            value={editedNote.description}
            onChange={handleEditChange}
          />
          <div className="actions">
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(note._id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteItem;