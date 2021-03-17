import {useState} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';
import {Typography} from 'antd';

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
    <>
      <div className="wrapper">
        <Row justify="center" align="middle" className="container">
          <Col span={12}>
            <Header
              title="Add Pretty Notes"
              onAddNote={handleAddNoteToggle}
              addNote={toggleAddNote}
            />
          </Col>
        </Row>

        <main role="main" className="container">
          <Row justify="center" align="middle">
            <Col span={12}>
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
            </Col>
          </Row>
        </main>
      </div>

      <footer>
        <Typography>
          @2021 Made by Pepa &{' '}
          <a href="https://github.com/ant-design/ant-design" target="_blank">
            AntDesign
          </a>{' '}
          for YouPan.
        </Typography>
      </footer>
    </>
  );
}

Header.defaultProps = {
  title: 'Prettynote app',
};

export default App;

Header.propTypes = {
  title: PropTypes.string,
};
