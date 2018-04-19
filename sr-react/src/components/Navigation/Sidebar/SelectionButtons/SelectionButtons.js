import React from 'react';

import SelectionButton from './SelectionButton/SelectionButton';

const selectionButtons = (props) => {
  let transformedCategories = props.categories
  .map(obj => {
    return <SelectionButton selectButtonHandler={props.selectButtonHandler} name={obj}/>
  })

  
  // <SelectionButton button={props.button} name={"All categories"}/>  to be implemented later and added to the div below
  return(
  <div>
    
    {transformedCategories}
  </div>
  )
}

export default selectionButtons;