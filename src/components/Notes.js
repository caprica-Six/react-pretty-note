import Note from './Note';

const Notes = ({notes}) => {
  return (
    <ul className="list-group">
      {notes.map((note, index) => (
        <li className="list-group-item" key={index}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
};

export default Notes;
