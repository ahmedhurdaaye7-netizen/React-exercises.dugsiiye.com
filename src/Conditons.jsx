import { useState } from "react";

function Conditon (){

    const[isLogin,setIsLogin] = useState(true)
//    function handleChange (){
//     setIsLogin(!isLogin)
//    }
//    return <h2>{isLogin ? 'welcome back': 'please login'}</h2>

   


return(
    <div>
       
      <button>register</button>
      <h2>{isLogin ? 'welcome back': 'please login'}</h2>
    </div>
)



}
export default Conditon;