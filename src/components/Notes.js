import Note from './Note';

const Notes = ({notes, onDelete, onToggle}) => {
  return (
    <>
      {notes.map((note, index) => (
        <Note note={note} onDelete={onDelete} onToggle={onToggle} key={index} />
      ))}
    </>
  );
};

export default Notes;
