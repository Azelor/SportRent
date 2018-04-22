import React from 'react';

import SelectionButton from './SelectionButton/SelectionButton';

const selectionButtons = (props) => {
  let transformedCategories = props.categories
  .map(obj => {
    return <SelectionButton selectButtonHandler={props.selectButtonHandler} key={obj+"-key"} name={obj}/>
  })

  return(
  <div>
    {transformedCategories}
  </div>  
  )
}

export default selectionButtons;