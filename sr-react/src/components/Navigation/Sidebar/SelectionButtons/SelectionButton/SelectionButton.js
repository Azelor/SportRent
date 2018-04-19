import React from 'react';

const selectionButton = (props) => (
  <button onClick={() => props.selectButtonHandler(props.name)} > {props.name} </button>
);

export default selectionButton;