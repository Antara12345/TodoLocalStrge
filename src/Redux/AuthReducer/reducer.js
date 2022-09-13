import { accessData, saveData } from "../../Utils/appLocalStorage";
import * as types from "./actionTypes"


const initialState={
    isAuth:accessData("token")?true:false,
    token:accessData("token")||"",
    isAuthLoading:false,
}

const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action;

    switch(type){
         
        case types.USER_LOGIN_REQUEST:
        return{
            ...oldState,
            isAuthLoading:true
        };

        case types.USER_LOGIN_SUCCESS:
        saveData("token",payload)
        return{
            ...oldState,
            isAuthLoading:false,
            token:payload,
            isAuth:true,
        };

        case types.USER_LOGIN_FAILURE:
        return{
            ...oldState,
            isAuthLoading:false,
            token:"",
            isAuth:false,
        };


        default:
        return oldState
    }
}
export {reducer}