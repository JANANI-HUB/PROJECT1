

  import React, { Component } from 'react';
  import './Project1post.css';
 //import { Link } from 'react-router-dom';
 import axios from 'axios';

 class Project1post extends Component {
   constructor(props) {
      super(props);
      this.state = {
          id:'',
          name:'',
          mobile:'',
          date:'',
          source:'',
          destination:'',
          tickets:'',
          type:''

      };
    }
    handleidChange = (event) => {
      this.setState({ id:event.target.value });
    };

    handlenameChange = (event) => {
      this.setState({ name:event.target.value });
    };

  

    handlemobileChange = (event) => {
      this.setState({ mobile: event.target.value });
    };

    handledateChange = (event) => {
     this.setState({ date: event.target.value });
   };

   handlesourceChange = (event) => {
     this.setState({ source: event.target.value });
   };


   handledestinationChange = (event) => {
     this.setState({ destination: event.target.value });
   };

   handleticketsChange = (event) => {
     this.setState({ tickets: event.target.value });
   };

   handletypeChange = (event) => {
     this.setState({ type: event.target.value });
   };

 

  

    handleSubmit = (event) => {
      event.preventDefault();
      const data = {
          id: this.state.id,
          name: this.state.name,
          mobile: this.state.mobile,
          date: this.state.date,
          source: this.state.source,
          destination: this.state.destination,
          tickets: this.state.tickets,
          type: this.state.type,

        
        
        };
    
        axios.post('http://127.0.0.1:8080/add',data)
    };

    render() {
      return (
        <body>
         <center>
       <div className="post">
         <form onSubmit={this.handleSubmit} className="sign-form" >
         <label className="sign-label">Id:</label>
         <input 
            type="text"  
            placeholder="Enter Id"  
            value={this.state.id}
          onChange={this.handleidChange}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         

        <label className="sign-label">Name:</label>
         <input 
            type="text"  
            placeholder="Enter Name"  
            value={this.state.name}
          onChange={this.handlenameChange}
            /><br></br>
         
            <label className="sign-label">MobileNumber:</label>
      <input type="tel"  placeholder="Enter mobile number"  value={this.state.mobile}
      onChange={this.handlemobileChange}
      /><br></br><br></br>
      

       <label className="sign-label">Booking Date & Time:</label>
       <input type="datetime-local"  value={this.state.date}
      onChange={this.handledateChange}
      /><br></br>



 <label className="sign-label"><b>Source: </b></label>
     <input type="text"  placeholder="Enter source"  value={this.state.source}
      onChange={this.handlesourceChange}
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


 <label className="sign-label">Destination:</label>
       <input type="text"  placeholder="Enter destination" value={this.state.destination}
      onChange={this.handledestinationChange}
      /><br></br>
         
 <label>Number of tickets:</label>
      <input type="number" placeholder="Enter number of tickets"  value={this.state.tickets}
      onChange={this.handleticketsChange}
      /><br></br>

        
 <label>Choose ticket type:</label>
 <dropdown value={this.state.type}
 onChange={this.handletypeChange}>
       <select>
      <option>Standard</option>
      <option>VIP</option>
      <option>Sleeper A/C</option>
      <option>Semi-Sleeper A/C</option>
    </select> </dropdown>

    <button className="submit" type="submit">Submit</button>


        </form>
        </div>
        </center>
        </body>
      );
    }
  }
  
  export default Project1post;
  
  
  
  
  // {/* <Link to="/project1bconfirm"><button>Finish</button></Link> */}

//  import React from 'react';
//   import './project1post.css';
//   import { Link } from 'react-router-dom';
//   export default function Project1post() {
//   return (
//   <>
//   <center>
//       <body>
//   <div className="post">



//       <label for="name"><b>Name: </b></label>
//       <input type="text"  placeholder="Enter Name" name="name"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <label for="mno"><b>MobileNumber: </b></label>
//       <input type="tel"  placeholder="Enter mobile number" name="mno"></input>
//       <label for="source"><b>Source: </b></label>
//       <input type="text"  placeholder="Enter source" name="source"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <label for="dest"><b>Destination: </b></label>
//       <input type="text"  placeholder="Enter destination" name="dest"></input><br></br><br></br><br></br>
//       <label for="dt"><b>Booking Date & Time: </b></label>
//       <input type="datetime-local" name="dt" ></input><br></br>
//       <label for="tic"><b>Number of tickets: </b></label>
//       <input type="number" placeholder="Enter number of tickets" name="tic"></input><br></br>
//       <label ><b>Choose ticket type: </b></label>
//       <select>
//       <option>Standard</option>
//       <option>VIP</option>
//       <option>Sleeper A/C</option>
//       <option>Semi-Sleeper A/C</option>
//     </select> <br></br>
//     <Link to="/project1bconfirm"><button>Finish</button></Link>
    
   
  


//   </div>
//   </body>
//   </center>
//   </>
//   )
//   }