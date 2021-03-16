import {useState} from 'react';

const AddNote = ({onAddNote}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a note');
      return;
    }

    onAddNote({text, day, reminder});

    // Clear form data
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="mb-3" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputNote" className="form-label">
          Note
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputNote1"
          aria-describedby="noteHelp"
          placeholder="Add note"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputDayTime" className="form-label">
          Day & Time
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputDayTime"
          aria-describedby="dayTime"
          placeholder="Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          checked={reminder}
          className="form-check-input"
          id="exampleCheck1"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Reminder
        </label>
      </div>

      <input type="submit" value="Save note" className="btn btn-primary" />
    </form>
  );
};

export default AddNote;
