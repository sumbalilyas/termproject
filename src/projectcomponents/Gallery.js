
import React, {Component} from 'react';

import {input} from '@material-ui/core';

class Gallery extends Component 
{
  
render(){
  return(
    <div>
    <label class="heading" >LOGIN PAGE</label>
    <div class="login-box" >
    <label class="tittle">Sign Up</label>
    <form >
    <label className="formlabel"  htmlFor="uname">Enter first Name </label><br></br>
    <input type="text" id="uname" className="inputname" placeholder="Enter Your Full Name" name="uname"></input>
    <br></br>
    <label htmlFor="lastname">Last name</label><br></br>
    <input type="text" id="lastname" className="inputname" placeholder="Enter Your Last Name" name="lastname"></input><br></br>
   
   
    <div className="FormField">
    <label className="formlabel" htmlFor="password">Enter Password </label><br></br>
    <input type="text" id="password" className="inputpassword" placeholder="Erter password" name="password"></input><br></br>
    <label htmlFor="dob">Data Of Birth</label><br></br>
    <input type="text" id="dob" className="inputdob" placeholder="Enter Your Date of Birth" name="dob"></input><br></br>
   
    <label htmlFor="email">Email</label><br></br>
    <input type="text" id="email" className="inputemail" placeholder="Enter Your Email Address" name="email"></input><br></br>
   
    <label htmlFor="Hobbies ">Enter your hobbies</label><br></br>
    <input type="text" id="hobbies" className="inputhobbies" placeholder="Enter Your hobbies" name="hobbies"></input><br></br>
   
    </div>
    
    <div className="FormField">
    <input type="button" value="Login"></input> 
    </div>
    
    </form>
    </div></div>
);
}
}

export default Gallery;