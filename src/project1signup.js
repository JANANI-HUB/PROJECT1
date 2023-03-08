import React from 'react';
import './project1signup.css';
import { Link } from 'react-router-dom';
export default function Project1signup() {
return (
<>
<center>
    <body>
<div>
<div class="split left">
  <div class="centered">
   
  
  

<form action="/action_page.php" method="post">
  <div className="signup">
  <h2>Sign Up</h2>
    <label for="fname"><b>Firstname: </b></label>
    <input type="text" placeholder="Enter Firstname" name="fname"/><br></br>
    <label for="fname"><b>Lastname: </b></label>
    <input type="text" placeholder="Enter Lastname" name="lname"/><br></br>
    <label for="email"><b>EmailID: </b></label>
    <input type="email" placeholder="Enter email id" name="email"/><br></br>

    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw"/><br></br>
        
   <Link to="/project1login" ><button type="submit">Submit</button></Link>
    
    

</div>
  
</form>
    </div>
</div>

<div class="split right">
  <div class="centered">
  <h1>VACATION PARADISE</h1>
    <img src="https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000" alt="Avatar woman"/>
  
    
   
  </div>
</div>

</div>
</body>
</center>
</>
)
}