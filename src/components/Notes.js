import Note from './Note';
import {List} from 'antd';

const Notes = ({notes, onDelete, onToggle}) => {
  return (
    <List>
      {notes.map((note, index) => (
        <Note note={note} onDelete={onDelete} onToggle={onToggle} key={index} />
      ))}
    </List>
  );
};

export default Notes;
