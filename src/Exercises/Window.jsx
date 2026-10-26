import { useEffect,useState } from "react";



function Widht(){
      const[Y,setY] = useState(window.innerHeight)
      const[X,setX] = useState(window.innerWidth)

      useEffect(()=>{
      const handleWindow = (event)=> {
         setX(event.clientX);
        setY(event.clientY);
      }
        
       window.addEventListener('mousemove',handleWindow)


      },[])

    return(

        <div>
           <h2>MOUSE Y :   {Y}px   </h2>
           <h2>MOUSE X :   {X}px   </h2>
        </div>
    )


}
export default Widht;