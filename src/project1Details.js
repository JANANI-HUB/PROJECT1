
import React from 'react'
import { Link } from 'react-router-dom'
function Project1Details() {
  return (
    <div>
        <center>
        <div className="details">
            <h1>ABOUT US!</h1>
            <p1>Hey Customer! Welcome! Thank you for choosing us!</p1><br></br><br></br>
            <p2><span>VACATION PARADISE</span> presently has a number of buses operating in the country. It is currently offering its services in various Indian states. Welcome Travel Agency also provide night buses.</p2><br></br><br></br>
            <p4>The buses will offer you great comfort and also enable you to reach your chosen destination on a stipulated time. Welcome Travel Agency make sure that you have a hassle-free journey on both longer and shorter routes. The routes taken by bus are well-constructed and smooth to ensure a relaxing journey to passengers.</p4><br></br><br></br>
            <p5>Online bus ticket booking makes it extremely easy to get your tickets booked for the bus. Once you have decided the date and time of your journey, the only thing you need to find out are the buses that operate through your chosen place. You can book  bus online through the official website.The process of booking bus tickets is pretty simple. It wont even take much time to get your tickets booked online.</p5><br></br><br></br>
            <p6>Note:</p6>
            <p7>You can also update your details,till the confirmation has been made.</p7>
            <p8>Also you can cancel your booking, before a day of our trip/journey.</p8>
            <Link to="/project1crud"><p className="b">To make your Booking easy,Click here to fill details!</p></Link>
        </div>
        </center>

    </div>
  )
}

export default Project1Details