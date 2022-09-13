
import { useState } from 'react';
import {handleAddActionObj,handleReduceActionObj} from "../Redux/AppReducer/action"
import { useDispatch, useSelector } from 'react-redux';


function Counter(){
   
  

  //useSelector help us to ACCESS the data inside our Redux Store.
  const count=useSelector((store)=>{    //....u can use any word instead od store..//
    return store.AppReducer.count;
  });
  // console.log(count)
  const dispatch=useDispatch();
  return (
    <div className="App">
       <h1>Counter:{count}</h1>
      <button onClick={()=>dispatch(handleAddActionObj(3))}>Add</button>
      <button onClick={()=>dispatch(handleReduceActionObj(2))}>Reduce</button>  
    </div>
  );
}
export default Counter