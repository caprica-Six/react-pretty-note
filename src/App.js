import {useState} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Typography} from 'antd';

import Header from './components/Header';
import Notes from './components/Notes';
import AddNote from './components/AddNote';

const {Text} = Typography;

function App() {
  const [toggleAddNote, setToggleAddNote] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: 'Plank challenge',
      day: '07 April, 2021',
      reminder: true,
    },
    {
      id: 1,
      text: 'Jogging, & weights',
      day: '16 March, 2021',
      reminder: false,
    },
    {
      id: 3,
      text: 'Arms & Core',
      day: '17 Mar, 2021',
      reminder: true,
    },
    {
      id: 4,
      text: 'Abs & Dumbbells',
      day: '03 May, 2021',
      reminder: false,
    },
  ]);

  // Delete note
  const deleteNote = (id) => {
    //console.log('delete', id);
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    //console.log('toggle', id);
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
    //console.log('toggle form');
  };

  return (
    <>
      <div className="wrapper">
        <Row justify="center" align="middle" className="container">
          <Col span={24}>
            <Header
              title="YouPan Pretty Notes"
              onAddNote={handleAddNoteToggle}
              addNote={toggleAddNote}
            />
          </Col>
        </Row>

        <main role="main" className="container">
          <Row justify="center" align="middle">
            <Col span={24}>
              {toggleAddNote && <AddNote onAddNote={handleAddNote} />}

              {notes.length > 0 ? (
                <Notes
                  notes={notes}
                  onDelete={deleteNote}
                  onToggle={toggleReminder}
                />
              ) : (
                <Text type="danger">Currently, no notes are added.</Text>
              )}
            </Col>
          </Row>
        </main>
      </div>

      <footer>
        <Typography>
          {' © '} {new Date().getFullYear()} {''} Made by Pepa &{' '}
          <a
            href="https://github.com/ant-design/ant-design"
            target="_blank"
            rel="noreferrer"
          >
            AntDesign
          </a>{' '}
          for YouPan.
        </Typography>

        <Typography>
          Deployed with{' '}
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netlify
          </a>
          .
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
