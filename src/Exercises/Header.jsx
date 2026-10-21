import { useState } from "react";



function Header(){

    const [user,setUser]= useState({name:'ahmed',age:26,bio:'full stack AI Engneer'})
   function update(){


setUser({...user,age:user.age + 1 })

   }
   function disupdate(){
    setUser({...user,age:user.age - 1 })



   }


    return (
        <div>

        
        <h2>name:{user.name},age{user.age},bio:{user.bio}</h2>
        <button onClick={update}>increase age</button>
        <button onClick={disupdate}>increase age</button>
        </div>
    )
}
export default Header;
