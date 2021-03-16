import Note from './Note';

const Notes = ({notes, onDelete}) => {
  return (
    <ul className="list-group">
      {notes.map((note, index) => (
        <li className="list-group-item" key={index}>
          <Note note={note} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default Notes;
