import { type } from "@testing-library/user-event/dist/type";
import * as types from "./actionTypes";

const userLoginRequest=()=>{
    return{
        type:types.USER_LOGIN_REQUEST
    }
}

const userLoginSuccess=(payload)=>{
    return{
        type:types.USER_LOGIN_SUCCESS,
        payload,
    }
}

const userLoginFailure=()=>{
    return{
        type:types.USER_LOGIN_FAILURE
    }
}

export{userLoginRequest,userLoginSuccess,userLoginFailure}