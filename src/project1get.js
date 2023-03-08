import axios from "axios";
import React, { Component } from "react";

class Project1get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <center>
        <div className="get"><br></br><br></br><br></br>
        <h1>Booking Details</h1>
      <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Date</th>
          <th>Source</th>
          <th>Destination</th>
          <th>Tickets</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.mobile}</td>
            <td>{user.date}</td>
            <td>{user.source}</td>
            <td>{user.destination}</td>
            <td>{user.tickets}</td>
            <td>{user.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </center>
    );
  }}
  

export default Project1get