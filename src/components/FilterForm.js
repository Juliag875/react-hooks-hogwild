import React from 'react';
import HogTile from "./HogTile"

function FilterForm({dropDown, checkBox, handleDropdown, handleCheckBox}) {



  return (
    <form>
      <input type="checkbox" 
        checked={checkBox ? "true" : ''} 
        onChange={handleCheckBox}/>

        <select onChange={handleDropdown} value={dropDown}>
          <option value="All">All</option>
          <option value="Name">Name</option>
          <option value="Weight">Weight</option>
        </select>
    </form>
  )
}

export default FilterForm;