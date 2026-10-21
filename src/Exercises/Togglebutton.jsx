import { useState } from "react";
   
 function ToggleButton(){
  
const[button,setButton] = useState(false)
  function Toggle (){

    setButton(!button)
  }
    return (
   <div> 
     {button ? 'the button is on ' : 'the button is off '}
     <br></br>
      <br></br>
    
    <button onClick={Toggle}>{button ? 'truned on ' :'truned off '}</button>







   </div>





    )



 }

export default ToggleButton;