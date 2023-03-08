import React from 'react'
import { Link } from 'react-router-dom'
function Project1crud() {
  return (
    <div>
        <center>
            <div className="crud">
                <br></br>
                <Link to="/project1post"><button>New Register</button></Link><br></br>
                <Link to="/project1update"><button>Update existing details</button></Link><br></br>
                <Link to="/project1delete"><button>Cancel Booking</button></Link><br></br>
                <Link to="/project1get"><button>See BookingInfo</button></Link>

            </div>
        </center>
    </div>
  )
}

export default Project1crud