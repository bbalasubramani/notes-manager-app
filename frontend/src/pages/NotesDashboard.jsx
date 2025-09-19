import React, { useState, useEffect } from 'react';
import NoteItem from '../components/NoteItem';
import { getNotes, createNote, updateNote, deleteNote } from '../services/api';

function NotesDashboard() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', description: '' });
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await getNotes();
      setNotes(res.data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  const handleCreateNote = async (e) => {
    e.preventDefault();
    try {
      await createNote(newNote);
      setNewNote({ title: '', description: '' });
      fetchNotes();
    } catch (err) {
      console.error('Error creating note:', err);
    }
  };

  const handleUpdateNote = async (id, updatedData) => {
    try {
      await updateNote(id, updatedData);
      setEditingNote(null);
      fetchNotes();
    } catch (err) {
      console.error('Error updating note:', err);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  return (
    <div className="notes-dashboard">
      <h2>My Notes</h2>
      <form onSubmit={handleCreateNote} className="note-form">
        <input
          type="text"
          placeholder="Note Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Note Description"
          value={newNote.description}
          onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
          required
        />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note._id}
              note={note}
              onDelete={handleDeleteNote}
              onUpdate={handleUpdateNote}
            />
          ))
        ) : (
          <p>No notes found. Start by adding one!</p>
        )}
      </div>
    </div>
  );
}

export default NotesDashboard;