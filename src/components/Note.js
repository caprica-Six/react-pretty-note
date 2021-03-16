import {FaTimes} from 'react-icons/fa';

const Note = ({note, onDelete, onToggle}) => {
  return (
    <div
      className={`note ${note.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(note.id)}
    >
      <li className="list-group-item">
        <p>
          {note.text}{' '}
          <FaTimes
            style={{color: 'red', cursor: 'pointer'}}
            onClick={() => onDelete(note.id)}
          />
        </p>
        <p className="small">{note.day}</p>
      </li>
    </div>
  );
};

export default Note;
