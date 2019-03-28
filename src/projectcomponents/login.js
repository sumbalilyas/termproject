import React, {Component} from 'react';
import {label} from '@material-ui/core';

// function Login()
// {
//   return(
//     <div>
//       <h1>Login Page</h1>
//     </div>
//   );
// }
class Login extends Component 
{
render(){
  return(
<div>
    <label class="heading" >REGISTRATION PAGE</label>
    <div class="login-box" >
    <form >
      <br></br>
    <label class="tittle">Register Yourself</label><br></br>
    <label className="formlabel"  htmlFor="uname">Enter first Name </label><br></br>
    <input type="text" id="uname" className="inputname" placeholder="Enter Your Full Name" name="uname"></input>
    <br></br>
    <label className="formlabel"  htmlFor="lastname">Last name</label><br></br>
    <input type="text" id="lastname" className="inputname" placeholder="Enter Your Last Name" name="lastname"></input><br></br>
   
   
    <div className="FormField">
    <label className="formlabel" htmlFor="password">Enter Password </label><br></br>
    <input type="text" id="password" className="inputpassword" placeholder="Erter password" name="password"></input><br></br>
    <label className="formlabel" htmlFor="dob">Data Of Birth</label><br></br>
    <input type="text" id="dob" className="inputdob" placeholder="Enter Your Date of Birth" name="dob"></input><br></br>
   
    <label className="formlabel" htmlFor="email">Email</label><br></br>
    <input type="text" id="email" className="inputemail" placeholder="Enter Your Email Address" name="email"></input><br></br>
   
    <label className="formlabel"  htmlFor="Hobbies ">Enter your hobbies</label><br></br>
    <input type="text" id="hobbies" className="inputhobbies" placeholder="Enter Your hobbies" name="hobbies"></input><br></br>
   
    </div>
    
    <div className="FormField">
    <input  class="button" type="button" value="Register"></input> 
    </div>
    
    </form>
    </div></div>
    );
}}
export default Login;