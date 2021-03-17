import React from 'react';
import CoreButton from './Button';
import {Card, Typography} from 'antd';
const {Title} = Typography;

export default function Header({title, onAddNote, addNote}) {
  return (
    <>
      <Typography>
        <Title style={mainHeading}> {title}</Title>
      </Typography>

      <Card
        size="small"
        title="Track your pretty notes"
        extra={
          <CoreButton
            text={addNote ? 'Close note' : 'Add note'}
            buttonType={addNote ? 'danger' : 'primary'}
            onClick={onAddNote}
          />
        }
      >
        Add or Remove your daily notes.
      </Card>
    </>
  );
}

const mainHeading = {
  textAlign: 'center',
  marginBottom: '1em',
};
