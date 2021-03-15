import {useState} from 'react';

const Notes = () => {
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
    <ul className="list-unstyled">
      ewFEWf
      {notes.map((note, index) => (
        <li key={index}>{note.text}</li>
      ))}
    </ul>
  );
};

export default Notes;
