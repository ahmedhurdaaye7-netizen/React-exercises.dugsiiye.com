import { useState,useEffect } from "react";

function SearchingData(){
   const[userName,setUserName]= useState([])
   const[user,setUser] = useState('')
  
   
   const usersData = async()=>{
         const response = await fetch(`https://api.github.com/users/ ${userName}`)
         const data = await response.json()
         setUserName(data)
          console.log(data)


   }

  


   
 return(
    <div>
      <h2>github user search </h2>
      <input type="text" placeholder="searcing"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}/>
      <button onClick={usersData}>searching</button>
      {user && (
        <div>
            <h2>{user.name}</h2>
            <h2>username:{user.login}</h2>
            <h2>bio:{user.bio}</h2>
            <h2>repo:{user.puplic_repos}</h2>
            <h2>followers:{user.followers}</h2>
            <h2>following:{user.following}</h2>
        </div>
      )

      }
  


    </div>
 )
    


           
          


}
export default SearchingData;