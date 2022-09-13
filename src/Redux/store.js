import {applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AppReducer } from "../Redux/AppReducer/reducer";
import {reducer as AuthReducer } from "../Redux/AuthReducer/reducer";
// const store= legacy_createStore(reducer,{count:20});

// .....day5......................//
const rootReducer=combineReducers({AppReducer,AuthReducer});

const logger1=(store)=>(next)=>(action)=>{

    //referes to the next middleware,if there is any,else the reducer function...
   const temp= next(action);
   return temp
}

const logger2=(store)=>(next)=>(action)=>{

    //referes to the next middleware,if there is any,else the reducer function...
   const temp= next(action);
   return temp
}

const store= legacy_createStore(rootReducer,applyMiddleware(logger2,logger2));

export {store};