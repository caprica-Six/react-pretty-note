import PropTypes from 'prop-types';

import Header from './components/Header';
import Notes from './components/Notes';

function App({notes}) {
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
