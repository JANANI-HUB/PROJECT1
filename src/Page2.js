// eslint-disable-next-line
import React from 'react';
import './Page2.css';
export default function Page2() {
return (
<>
<center>
<div className='demo'>
<h>LOCATION</h><img src="https://i.pinimg.com/736x/d4/85/8f/d4858fd1d4664a86bcf06733e56608d7.jpg" alt="jan"/><br></br><br></br>
<a href="https://maps.google.com">Click on this to access your location</a>
<p>After Accessing your location, Search in text box to search your Hospitals. </p>
<label>Search:</label>
<input type="text" placeholder="Enter your hospital"></input>
</div>
</center>

</>
)
}