import {List, Typography, Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons';

const Note = ({note, onDelete, onToggle}) => {
  return (
    <List
      bordered
      className={`note ${note.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(note.id)}
    >
      <List.Item>
        <Typography className="small">{note.text}</Typography>
        <Typography className="small">{note.day}</Typography>

        <Button
          type="danger"
          icon={<CloseOutlined theme="outlined" />}
          onClick={() => onDelete(note.id)}
        />
      </List.Item>
    </List>
  );
};

export default Note;
