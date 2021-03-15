import React from 'react';
import Button from './Button';

export default function Header({title, onClick}) {
  onClick = () => console.log('clicked');

  return (
    <header>
      <div className="header">
        <h1 style={mainHeading}>{title}</h1>
        <Button text="Add" color="green" onClick={onClick} />
      </div>
    </header>
  );
}

const mainHeading = {
  marginTop: '1em',
  textAlign: 'center',
};
