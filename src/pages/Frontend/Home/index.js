import React, { useState } from 'react';

export default function NotesApp() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNote = () => {
    if (note.trim()) {
      if (isEditing) {
        const updatedNotes = notes.map((n, index) => (index === editIndex ? note : n));
        setNotes(updatedNotes);
        setIsEditing(false);
      } else {
        setNotes([...notes, note]);
      }
      setNote(''); // Clear the input field
    }
  };

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const handleEditNote = (index) => {
    setNote(notes[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <main className='py-5'>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1>Welcome To NotesHub</h1>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{isEditing ? 'Edit your note' : 'Add a note'}</h5>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="addTxt"
                    rows="3"
                    value={note}
                    onChange={handleInputChange}
                  ></textarea>
                  <br />
                </div>
                <button className="btn btn-primary" onClick={handleAddNote}>
                  {isEditing ? 'Update Note' : 'Add Note'}
                </button>
              </div>
            </div>
            <hr />
            <h1>Added Notes</h1>
            <hr />
            <div id="notes" className="row container-fluid">
              {notes.map((note, index) => (
                <div key={index} className="col-12 my-2">
                  <div className="alert alert-secondary d-flex justify-content-between align-items-center">
                    {note}
                    <div>
                      <button
                        className="btn btn-primary btn-sm mx-1"
                        onClick={() => handleEditNote(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteNote(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

          