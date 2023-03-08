import React, { Component } from 'react';
  import './project1update.css';
 //import { Link } from 'react-router-dom';
 import axios from 'axios';

 class Project1update extends Component {
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
    
        axios.put('http://127.0.0.1:8080/updateDetails',data)
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

    <button className="submit" type="submit">Update</button>


        </form>
        </div>
        </center>
        </body>
      );
    }
  }
  
  export default Project1update;