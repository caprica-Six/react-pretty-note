import {useState} from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Notes from './components/Notes';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: 'Gym',
      day: '15 Mar, 2021',
      reminder: true,
    },
    {
      id: 1,
      text: 'Jogging',
      day: '16 Mar, 2021',
      reminder: true,
    },
    {
      id: 2,
      text: 'Weights and jogging',
      day: '17 Mar, 2021',
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header title="Pretty note app" />
          <Notes notes={notes} />
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
