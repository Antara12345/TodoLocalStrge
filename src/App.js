
// ........................day5.....
import logo from './logo.svg';
import './App.css';

import Counter from './Components/Counter';
import Todos from './Components/Todos';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginFailure, userLoginRequest, userLoginSuccess } from './Redux/AuthReducer/action';
import axios from 'axios';

function App() {
 const[useremail,setUseremail]=useState("");
 const [userpassword,setUserpassword]=useState("");
 const isAuth=useSelector((state)=>state.AuthReducer.isAuth)

 const dispatch=useDispatch()

 const handleLogin=()=>{
  if(useremail&& userpassword){
    const payload={
      email:useremail,
      password:userpassword,
    };
    dispatch(userLoginRequest());
    return axios.post("https://reqres.in/api/login",payload)
    .then((r)=>{
       dispatch(userLoginSuccess(r.data.token));
    }).catch((e)=>{
      dispatch(userLoginFailure(e))
    })
  }
 }
 console.log("checking",isAuth)
  return(
    <div className="App">
 <Counter/>
 <br/>
 <div>
  <input placeholder='email' value={useremail} onChange={(e)=>{setUseremail(e.target.value)}}/>
  <br/>
  <input placeholder='password' value={userpassword} onChange={(e)=>setUserpassword(e.target.value)}/>
  <br/>
  <button onClick={handleLogin}>LOGIN</button>
 </div>
 {isAuth&&<Todos/>}
    </div>
  );
 
}

export default App;

