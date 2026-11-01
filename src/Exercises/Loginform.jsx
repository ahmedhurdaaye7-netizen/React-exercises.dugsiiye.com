import { useState } from "react";

function  Login (){


    const [userName,setUserName] = useState('')
    const[userPassword,setUserPassword] = useState('')
    const[isLogin,setIsLogin] = useState(false)
     const loginButton = () =>{

       if(!userName.trim()=='' && !userPassword.trim()==''){
        setIsLogin(true)
    

       } else{
          alert('please login both')
          
        
       }

     } 
      const logoutButton = ()=>{
      setIsLogin(false)
      setUserName('')


      }
    
      
     
     if (isLogin){
        return <div>
            <h2>welcome back,{userName}</h2>
            <button onClick={logoutButton}>logout</button>
        </div>
     } 
    


 return (
    <div>
       <h2>login form</h2> 
       <input type="text" placeholder="user name" required onChange={(e)=>setUserName(e.target.value)} 
       value={userName} />
       <input type="password"  placeholder="password" required
       onChange={(e)=>setUserPassword(e.target.value)} 
       />
       <button onClick={loginButton}>login</button>
    
    </div>
 )


}
export default Login;