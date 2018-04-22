import React from 'react';
import { NavLink } from 'react-router-dom';

import './SelectionButton.css';

const selectionButton = (props) => (
  <NavLink
  className="NavLink"
  to={'/'+props.name}
   onClick={() => props.selectButtonHandler(props.name)} 
  >
  <div className="Button">
    {props.name}
  </div>
  
  </NavLink>
);

export default selectionButton;