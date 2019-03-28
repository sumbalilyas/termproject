
import React, {Component} from 'react';
import {pic} from './pic.png';
 class About extends Component
 {
     render(){
return(
<div id="about">

<center>
<h1 class="details">Details about our college</h1>
<img src={'pic'}  alt={pic}></img>
<center>
    <p class="details">
    College of Science and Commerce (B.C.S.C) was established under Bukhari Educational society ( Regd.)<br></br>
   in September 2012 with the aim to provide education and to facilitate those poor students who cannot<br></br>
   afford educational expenses.
    </p>
    <p class="details"> We inherited a vast and open campus spreading over more than 3 kanals of land. It is an ideal and<br></br>
      easy accessible location with ideally built for educational institute the building has been designed<br></br>
       to provide state of art, research and teaching facilities. The campus is open and green. It is only<br></br>
        a few minutes drive from the heart of the city, situated at G.T Road, Jhelum.</p>
</center>
</center>




</div>

);



     }
 }
 export default About;