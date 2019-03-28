import React,{Component} from 'react';
import {label} from '@material-ui/core';

class Registration extends Component 
{
  



render(){
  return(

<div className="FormCenter">
<form onSubmit={this.handleSubmit} >
<label className="formlabel" htmlFor="fname">Enter First Name </label>
<input 
type="text"
 id="fname" 
 className="inputname"
  placeholder="Enter First Name"
   name="fname"
   onChange={this.handleChange} ></input>
<div>
<label className="formlabel" htmlFor="lname">Enter Last Name </label>
<input type="text"
 id="lname" 
 className="inputname"
  placeholder="Enter Last Name"
   name="lname"
   onChange={this.handleChange}></input>
</div>
<div>
<label className="formlabel" htmlFor="cnic">Enter  CNIC     </label>
<input type="text"
 id="cnic"
  className="inputname" 
  placeholder="CNIC number"
   name="cnic"
   onChange={this.handleChange}></input>
</div>
<div>
<label className="formlabel" htmlFor="contactno">Enter Contact Number </label>
<input type="text" id="contactno" className="inputcontact" placeholder="Enter contactno" name="contactno"onChange={this.handleChange}></input>
</div>

<div className="FormField">
<label className="formlabel" htmlFor="password">Enter Password </label>
<input type="text" id="password" className="inputpassword" placeholder="Erter password" name="password"onChange={this.handleChange}></input>
</div>

<div className="FormField">
<input type="button" value="Register "></input> 
</div>

</form>
</div>


);
}
}
export default Registration;