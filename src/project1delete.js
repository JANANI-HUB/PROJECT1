import axios from "axios";
import React from "react";
import {useState}from "react";
import './project1delete.css'
function Project1delete() {
    const [search,setSearch]=useState("");
    //const [idData,setData]=useState([]);
    const searchid=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/deleteDetails/'+search)
            .catch(err=>console.log(err))
        }
    }
  return (
    <div><>
    <center>
<div class="delete">
                <h2 id="dels">Delete Booking</h2>
                <div className="search" >
                  <label>Id:   </label>
                    <input type="text" className='k' placeholder="Enter Id to cancel booking"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchid}/><br></br>
                    <p className="de">Click Enter to delete!</p>
                    
                </div>
                
                 
            </div>
            </center>      
        </></div>
  )
}

export default Project1delete


// import React from 'react'
// import { Link } from 'react-router-dom'
// function Project1delete() {
//   return (
//     <div>
//         <center>
//             <div className="delete">
//             <p>Are you sure to cancel your booking?</p>
//             <Link to="/project1cancel"><button>Delete booking!</button></Link>

//         </div>
//         </center>
//     </div>
//   )
// }

// export default Project1delete