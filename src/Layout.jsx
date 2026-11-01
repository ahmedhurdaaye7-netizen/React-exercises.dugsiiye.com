
function LaYout({currentUser,role,age}){

         import { useState,useEffect } from "react";

function SearchingData(){

const[users,setUsers] = useState([])
const[loading,setLoading] = useState(false)

useEffect (()=>{

const fetchUserData = async()=>{
     setLoading(true)
 try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
    setLoading(false)
    setUsers(data)
 } catch(error){
    console.log(error)
 }
}
fetchUserData()
},[])
if (loading) return <h2>loading....</h2>

return(
    <div>
     <h2>lis of users:
        <ul>
             {
            users.map((user)=>(
                <li >{user.title}</li>

            ))
        }

        </ul>
       
     </h2>
     
      


    </div>
)


}
export default SearchingData;


    return(
      <div>
      <h2>hello,{currentUser}</h2>
      <h3>your role is :{role}</h3>
      <h4>your age is :{age}</h4>

      </div>
    )
}
export default LaYout;