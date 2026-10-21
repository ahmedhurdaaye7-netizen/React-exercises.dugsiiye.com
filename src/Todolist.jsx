import { use, useState } from "react";

function Todolist(){
    const[todos,setToDos] = useState([])
    const[inputValue,setInputValue] = useState('')
     function handleAddItem(){
        const newToDo = {

           id:Date.now(),
           Text: inputValue,
           complted:false

        }
       setToDos([...todos,newToDo])



     }

   return (

      <div>
      <input type="text"  placeholder="enter a new to-do"
      onChange={(e)=>setInputValue(e.target.value)}
      value={inputValue}
      
      />
      <button onClick={handleAddItem}>add</button>

      <ul>
        {

     todos.map(todo =>(

          <li>{todo.Text}</li>

     )



     )



        }

      </ul>
        
      </div>


   )

}
export default Todolist;