
import { useEffect, useState } from "react";



function Greating(){
   const[title,setTitle]= useState('')
   const[greeting,setGreeting] = useState('hello ,')

   useEffect(()=>{
    
      document.title = ` hello, ${title}`
    console.log('hello')

   
},[title])
   

 return(
    <div>

         <h2>enter your name</h2>
         <input type="text" placeholder="name"  value={title}
         
           onChange={(e)=>setTitle(e.target.value)}
         />

           <input type="text"   value={greeting}
         
           onChange={(e)=>setGreeting(e.target.value)}
         />
    </div>
 )


}
export default Greating;