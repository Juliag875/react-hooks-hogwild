import React, {useState} from "react";
import hogsData from "../porkers_data";
import HogTile from "./HogTile";
import FilterForm from "./FilterForm";


function HogContainer() {
  const[hogs, setHogs] = useState(hogsData);
  const [dropDown, setDropDown] = useState("All");
  const [checkBox, setCheckBox] = useState(false);

  function handleDropdown(e){
    setDropDown(() => e.target.value)
  }

  function handleCheckBox(){
    setCheckBox(checkBox => !checkBox)
  }

  const filterHogs=()=> {
    if(checkBox) {
      return hogs.filter(hog => hog.greased)
    }else{
      return hogs
    }
  }

  const sortHogs = () => {
    const hogsArray = filterHogs()

    if(dropDown === "Weight") {
      return hogsArray.sort((a,b) => a.weight - b.weight)
    } else if (dropDown === "Name") {
      return hogsArray.sort((a,b) => a.name.localeCompare(b.name))
    }else {
      return hogsArray
    }
  }


  const hogsList = sortHogs().map(hog => (
  <HogTile 
    key={hog.name}
    name={hog.name}
    image={hog.image}
    weight={hog.weight}
    specialty={hog.specialty}
    greased={hog.greased}
    medal={hog["highest medal achieved"]}
    on
    />
  ))

	return (
    <div>
      <FilterForm 
        dropDown={dropDown}
        checkBox={checkBox}
        handleDropdown={handleDropdown}
        handleCheckBox={handleCheckBox}
      />
      <div className="ui grid container">
        {hogsList}
      </div>
    </div>
	);
}

export default HogContainer;
