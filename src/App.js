import {useState} from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Notes from './components/Notes';
import AddNote from './components/AddNote';

function App() {
  const [toggleAddNote, setToggleAddNote] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: 'Squats & running',
      day: '15 Mar, 2021',
      reminder: true,
    },
    {
      id: 1,
      text: 'Jogging, & weights',
      day: '16 Mar, 2021',
      reminder: true,
    },
    {
      id: 2,
      text: 'Weights & yoga',
      day: '17 Mar, 2021',
      reminder: false,
    },
  ]);

  // Delete note
  const deleteNote = (id) => {
    console.log('delete', id);
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    console.log('toggle', id);
    setNotes(
      notes.map((note) =>
        note.id === id ? {...note, reminder: !note.reminder} : note
      )
    );
  };

  // Add Note
  const handleAddNote = (note) => {
    //console.log('submit note', note);

    const id = Math.floor(Math.random() * 10000) + 1;

    const newNote = {id, ...note};
    setNotes([...notes, newNote]);
  };

  const handleAddNoteToggle = () => {
    setToggleAddNote(!toggleAddNote);
    console.log('toggle form');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header
            title="Prettynote app"
            onAddNote={handleAddNoteToggle}
            addNote={toggleAddNote}
          />

          {toggleAddNote && <AddNote onAddNote={handleAddNote} />}

          {notes.length > 0 ? (
            <Notes
              notes={notes}
              onDelete={deleteNote}
              onToggle={toggleReminder}
            />
          ) : (
            'No notes added'
          )}
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: 'Prettynote',
};

export default App;

Header.propTypes = {
  title: PropTypes.string,
};
