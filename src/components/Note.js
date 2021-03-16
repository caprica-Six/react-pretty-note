import {FaTimes} from 'react-icons/fa';

const Note = ({note}) => {
  return (
    <div>
      <p>
        {note.text} <FaTimes />
      </p>
      <p className="small">{note.day}</p>
    </div>
  );
};

export default Note;
