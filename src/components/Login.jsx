import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Link, useNavigate } from 'react-router-dom';
  import { useState } from 'react';
const Login = () => {
  let [email, setemail]=useState("")
  let [pwd,setpwd]=useState("")
  let navigate=useNavigate()
  let remail=localStorage.getItem("email")
  let rpwd=localStorage.getItem("pwd")

let handlesignin=(e)=>{
  e.preventDefault()
  if((remail==email)&&(pwd==rpwd)){
    toast.success(`${email} sucesfully loged in.................`)
    navigate("/home")


  }else{
    toast.warning(`${email} OR ${pwd} does't matched!!!!!!!!!`)
  }

}

  return (
    <center>

      <br /> 
      <h1>SIGN IN</h1>
         <div style={{border:"2px solid lightgrey", width:"500px", height:450,borderRadius:10,backgroundColor:"bisque"}}>
        <form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <ToastContainer/>
    <input type="email" id="form2Example1" class="form-control" style={{border
    :"2px solid grey"}} onChange={(e)=>{
      setemail(e.target.value)
    }}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" style={{border
    :"2px solid grey"}} onChange={(e)=>{setpwd(e.target.value)}} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label class="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={handlesignin}>Sign in</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    <p>Not a member? <Link to="/signup"><a href="#!">Register</a></Link></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
    </div>
    </center>

  )
}

export default Login