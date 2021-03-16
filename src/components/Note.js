import {FaTimes} from 'react-icons/fa';

const Note = ({note, onDelete}) => {
  return (
    <div>
      <p>
        {note.text}{' '}
        <FaTimes
          style={{color: 'red', cursor: 'pointer'}}
          onClick={() => onDelete(note.id)}
        />
      </p>
      <p className="small">{note.day}</p>
    </div>
  );
};

export default Note;
