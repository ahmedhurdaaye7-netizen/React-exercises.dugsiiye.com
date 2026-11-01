import { useState } from "react";

function Events() {

    const[increase,setIncrease] = useState(false)
    const[counter,setCounter]  = useState(0)


    const handleIncrease = ()=>{

        setCounter(counter + 1)
    }

    const handleDecrease = ()=>{
       if(counter> 0){
         setCounter(counter - 1)

       }

    }
 
  return(
    <div>
        <h2> counter:{counter}</h2>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDecrease}>decrease</button>

    </div>
  )

} 
export default Events;