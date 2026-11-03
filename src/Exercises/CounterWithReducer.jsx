import { useReducer } from "react";

const intialState = {

    countA:0,
    counterB: 0
}
const reducer =(state,action)=>{
    switch(action.type){
            case 'increament_A':
            return{...state,countA:state.countA + 1}
            case 'decreament_A':
            return{...state,countA:state.countA - 1}
            case 'increament_B':
            return{...state,counterB:state.counterB + 1}
            case 'deccreament_B':
            return{...state,counterB:state.counterB - 1}
        
            case 'reset_All':
             return intialState
            default:
            return state

    }



}


function  CounterWithReducer(){
    const[state,dispatch] = useReducer(reducer,intialState)

 
  return (
    <div>
     <h2>double counter</h2>
     <h2>counterA:{state.countA}</h2>
     <button onClick={()=>dispatch({type:'increament_A'})}>+A</button>
     <button onClick={()=>dispatch({type:'decreament_A'})}>-A</button>
      <h2>counterB:{state.counterB}</h2>
      <button onClick={()=>dispatch({type:'increament_B'})}>+B</button>
     <button onClick={()=>dispatch({type:'deccreament_B'})}>-B</button>
     <button onClick={()=>dispatch({type:'reset_All'})}>reset all</button>


    </div>
  )




}
export default  CounterWithReducer;