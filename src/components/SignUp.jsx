import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
  let [fname,setfname]=useState("")
  let [lname,setlname]=useState("")
  let[email,setemail]=useState("")
  let [pwd,setpwd]=useState("")
  let navigate=useNavigate() 

  let handlesignUp=(e)=>{
    e.preventDefault()
    localStorage.setItem("email",email)
    localStorage.setItem("pwd",pwd)
    navigate("/login")
    toast.success(`${email} successsfully registered...................`,{position:toast.POSITION.TOP_CENTER})

    
  



  }

  return (
    <center>
      <br /> 
      <h1>SIGN UP</h1>
      <ToastContainer/>
         <div style={{border:"2px solid lightgrey",width:"500px",height:"450px",borderRadius:10,backgroundColor:"bisque"}}>
      <form>
  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" style={{border:"2px solid grey"}} onChange={(e)=>{
          setfname(e.target.value)
        }}/>
        <label class="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" style={{border:"2px solid grey"}} onChange={(e)=>{
          setlname(e.target.value)
        }}/>
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" style={{border:"2px solid grey"}} onChange={(e)=>{
      setemail(e.target.value)
    }}/>
    <label class="form-label" for="form3Example3">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" style={{border:"2px solid grey"}} onChange={(e)=>{
      setpwd(e.target.value)
    }} />
    <label class="form-label" for="form3Example4">Password</label>
  </div>

  {/* <!-- Checkbox --> */}
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label" for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={handlesignUp}>Sign up</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
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

export default Register