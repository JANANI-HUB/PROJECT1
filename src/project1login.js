// import React, { Component } from 'react';
// import './project1login.css';
// import axios from 'axios'

// class Project1login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         username:'',
//         password:''
//     };
//   }


//   handleNameChange = (event) => {
//     this.setState({ username: event.target.value });
//   };

  

//   handlePasswordChange = (event) => {
//     this.setState({ password: event.target.value });
//   };

 

  

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
        
//         username: this.state.username,
        
//         password: this.state.password,
        
        
//       };
    
//       axios.post('http://127.0.0.1:8080/add', data)
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="sign-form">


//         <label className="sign-label">Name</label>
//         <input
//           className="sign-input"
//           type="text"
//           value={this.state.username}
//           onChange={this.handleNameChange}
//         />

       
//         <label className="login-label">Password</label>
//         <input
//           className="login-input"
//           type="password"
//           value={this.state.password}
//           onChange={this.handlePasswordChange}
//         />

        
        
//         <button className="login-button" type="submit">
//           Login
//         </button>
//       </form>
//     );
//   }
// }

// export default Project1login;


import React from 'react';
import './project1login.css';
import { Link } from 'react-router-dom';
export default function Project1login() {
return (
<>
<center>
    <body>
<div>
<div class="split left">
  <div class="centered">
   
  
  

<form action="/action_page.php" method="post">
  <div className="login">
  <h2>Login Form</h2>
    <label for="uname"><b>Username: </b></label>
    <input type="text" placeholder="Enter Username" name="uname"/><br></br>

    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw"/><br></br>
        
    <Link to="/project1Details"><button type="submit">Login</button></Link>
    <p className="s"><Link to="/project1signup">Or SignUp?</Link></p>
    

</div>
  
</form>
    </div>
</div>

<div class="split right">
  <div class="centered">
  <h1 className="h">VACATION PARADISE</h1>
    <img src="https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000" alt="Avatar woman"/>
  
    
   
  </div>
</div>

</div>
</body>
</center>
</>
)
}