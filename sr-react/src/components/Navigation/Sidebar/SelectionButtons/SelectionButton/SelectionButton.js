import React from 'react';

import './SelectionButton.css';

const selectionButton = (props) => (
  <button className="Button" onClick={() => props.selectButtonHandler(props.name)} > {props.name} </button>
);

export default selectionButton;