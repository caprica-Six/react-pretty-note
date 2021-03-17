import {useState} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';

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
    //console.log('ant submit form?:::');

    // Clear form data
    setText('');
    setDay('');
    setReminder(false);
  };

  const onFinish = () => {
    //console.log('onFinish:::', values);

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

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setReminder(e.target.checked);
  };

  /* eslint-disable no-template-curly-in-string */

  return (
    <Form
      name="complex-form"
      layout="vertical"
      onSubmit={onSubmit}
      onFinish={onFinish}
    >
      <Form.Item label="Note" htmlFor="inputNote">
        <Input
          placeholder="Add a note"
          id="inputNote"
          aria-describedby="addNote"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="test"
        />
      </Form.Item>
      <Form.Item label="Day & Time" htmlFor="inputDayTime">
        <Input
          placeholder="Add day & time"
          id="inputDayTime"
          aria-describedby="dayTime"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Checkbox
          type="checkbox"
          checked={reminder}
          className="form-check-input"
          id="exampleCheck1"
          value={reminder}
          onChange={onChange}
        >
          Reminder
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddNote;
