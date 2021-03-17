import React from 'react';
import CoreButton from './Button';
import {PageHeader, Card} from 'antd';

export default function Header({title, onAddNote, addNote}) {
  return (
    <>
      <PageHeader>
        <h1 style={mainHeading}>{title}</h1>
        {/* <CoreButton
            text={addNote ? 'Close note' : 'Add note'}
            buttonType={addNote ? 'danger' : 'primary'}
            onClick={onAddNote}
          /> */}
      </PageHeader>

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
        style={{'min-width': 300}}
      >
        <p>Add or Remove a note</p>
      </Card>
    </>
  );
}

const mainHeading = {
  fontSize: '1.5em',
  textAlign: 'center',
};
