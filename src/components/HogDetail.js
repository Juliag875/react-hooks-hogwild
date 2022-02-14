import React from "react";


function HogDetail({medal, greased, weight, specialty}) {
  
	return (
    <div>
      <p>
				{medal} 
				{weight} 
				{greased ? "Greased" : "Not Greased"}
				{specialty}
			</p>
    </div>
	);
}

export default HogDetail;