import React from 'react';
import Button from './Button';

export default function Header({title, onAddNote, addNote}) {
  return (
    <header>
      <div className="header">
        <h1 style={mainHeading}>{title}</h1>
        <Button
          text={addNote ? 'Close note' : 'Add note'}
          color={addNote ? 'purple' : 'black'}
          onClick={onAddNote}
        />
      </div>
    </header>
  );
}

const mainHeading = {
  marginTop: '1em',
  textAlign: 'center',
};
