
import { useEffect, useState } from "react";

function Test1(){
     

    
      
    const[title,setTitle] = useState('hello, dugsiiye')
    const[name,setName] = useState('')
     useEffect(()=>{
       document.title = ` ${title},${name},`

     },[title,name])

   return(
    <div>

       
     <h2>useeffects</h2>
     <input type="text"  placeholder="title"
     value={title}
     onChange={(e)=>setTitle(e.target.value)} />
    
     <input type="text"  placeholder="user name"
     value={name}
     onChange={(e)=>setName(e.target.value)} />


    </div>

   )



}
export default Test1;