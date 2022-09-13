

// import { ADD,REDUCE } from "./actionTypes"; 

import * as types from "./actionTypes";
import { accessData,saveData } from "../../Utils/appLocalStorage";
const initialState={
    count: accessData("counter")||12,
    todos:[],
    isLoading:false,
    isError:false,

};
const reducer =(oldState=initialState,action)=>{
    const {type,payload}=action;
    // console.log("inside reducer",type,payload)
    switch(type){
        
        case types.ADD:
        let tempCount=
      oldState.count+payload>=100?100: oldState.count+payload;
      saveData("counter",tempCount)
      return{...oldState,count:tempCount};

      case types.REDUCE:
      saveData("counter", oldState.count-payload);
        return{...oldState, count:oldState.count-payload};
        
        case types.GET_TODOS_REQUEST:{
   return{...oldState,isLoading:true}
        }

        case types.GET_TODOS_SUCCESS:{
            return{...oldState,isLoading:false,todos:payload}
        }

        case types.GET_TODOS_FAILURE:{
         return{...oldState,isLoading:false, todos:[],isError:true};
        }


        default:
        return oldState;
    }
};

//jo cmnt out kiywe wo v likh skty upr utna likhne k jgh

// const reducer=(oldState=initialState,action)=>{
//     const {type.payload}=action;
//     switch(type){
//         default:
//         return oldState
//     }
// }

export { reducer };