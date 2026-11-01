import { useEffect, useState } from "react"

function Watch(){
  const[time,setTime]=useState(0)
  const[isRunning,setIsRunning] = useState(false)
  
  useEffect(()=>{

    let timerId;
    if(isRunning){
     timerId = setInterval(()=>{
       setTime((prev)=> prev+ 1)
        console.log(time)
     
    },1000)

    }
   
    return ()=>clearInterval(timerId)

  },[isRunning])
//   const handleStart = ()=>{

  
//   }
  function handleStart(){
      setIsRunning(true)

  }
  function handleStop (){
    setIsRunning(false)
  }
  const  handleReset = () => {

    setIsRunning(false)
    setTime(0)
  }

return(
    <div>
        <h2>stopwatch {time}se</h2>
        <button disabled = {!isRunning} onClick={handleStop}>stop</button>
        <button disabled ={isRunning} onClick={handleStart}>start</button>
        <button onClick={handleReset}>reset</button>
    </div>
)



}
export default Watch