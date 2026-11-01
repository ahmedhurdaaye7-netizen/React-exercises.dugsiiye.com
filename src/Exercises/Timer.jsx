import { useState,useEffect } from "react";

function Timer(){

 const[time,setTime] = useState(0)
//  const[timeLeft,setTimeLeft] = useState(0)
 const[isRuning,setIsRuning] = useState(false)
   useEffect(()=>{
      let timerId;
    if(time> 0){
         timerId = setInterval(()=>{
         setTime((prev) => prev - 1)
      },1000) 

    }
     
      return()=>clearInterval(timerId)
    

   },[time])

return(
    <div>
    <span>set time (seconds):</span>
    <input type="text" 
    value={time}
    onChange={(e)=> setTime(e.target.value)}
    />
<h2>time left:{time} sec</h2>
  <button>stop</button>
  <button>start</button>
  <button>reset</button>
    </div>
)


}
export default Timer;