import React, {useState} from "react";
import HogDetail from "./HogDetail"


function HogTile({name, image, medal, greased, weight, specialty}) {
  const[toggleDetail, setToggleDetail] = useState(false)
  
  function handleChangeToggle(){
    setToggleDetail(toggleDetail => !toggleDetail)
  }
	return (
    <div className="ui four wide column pigTile" onClick={handleChangeToggle}>
      <h3>{name}</h3>
      <img style={{maxWidth:200}} src={image} alt={name}/>
  
      {toggleDetail ?
      <HogDetail 
        medal={medal} 
        greased={greased} 
        weight={weight} 
        specialty={specialty}/>
      :
      null
      }
      
    </div>
	);
}

export default HogTile;