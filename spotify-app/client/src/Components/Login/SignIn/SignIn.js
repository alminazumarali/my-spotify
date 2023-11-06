import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuthenticated, setPassword, setUsername } from '../../../slices/userAuth'
import './signin.scss'
// import {signIn} from '../slices/UserSlice'
function SignIn() {
  const users = useSelector((state) => state.auth.users);
  const [formData,setFormData]=useState({username:'',password:''});
  const dispatch=useDispatch();
  const handleSignIn=()=>{
    const { username, password } = formData;
    const user = users.find((user) => user.username === username && user.password === password);
    if(user){
      dispatch(setUsername(formData.username));
      dispatch(setPassword(formData.password));
      dispatch(setAuthenticated(true));
      console.log(user.id);
      sessionStorage.setItem("userId",JSON.stringify(user.id))
      navigate('/home');
    }
    else{
      alert("Invalid Username or Password")
      navigate('/signIn');
    }
  }
  const handleSubmit=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  const navigate=useNavigate()
  return (
    <div className='signIn'>
      <div className='forms-signIn'>
        <div className='signIn-txt'>
        Login
        </div>
        <form className='forms1-signIn'>
          <div className='contents-signIn'>
            <label className='label-signIn'>UserName :</label>
            <input className='input-signIn' name='username' value={formData.username} onChange={handleSubmit} label='userName'/>
          </div>
          <div className='contents-signIn'>
            <label className='label-signIn'>Password :</label>
            <input className='input-signIn' name='password' value={formData.password} onChange={handleSubmit} label='password'/>
          </div>
          <button onClick={handleSignIn} className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;