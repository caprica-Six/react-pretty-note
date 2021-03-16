import Note from './Note';

const Notes = ({notes, onDelete, onToggle}) => {
  return (
    <ul className="list-group">
      {notes.map((note, index) => (
        <Note note={note} onDelete={onDelete} onToggle={onToggle} key={index} />
      ))}
    </ul>
  );
};

export default Notes;
