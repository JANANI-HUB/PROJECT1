// eslint-disable-next-line
import React from 'react';
import './Page4.css';
import {Link} from 'react-router-dom';
export default function Page4() {
return (
<>
<center>
<div className='demo'>
<p>Your appointment details</p>
<img src="https://img.freepik.com/premium-vector/round-shape-exclamation-mark-icon_645756-81.jpg?w=2000" alt="jan"/><br></br>
<p>Oops! No appointments</p>
<Link to="/Page3"><button type="button">BACK</button></Link>



</div>
</center>
</>
)
}
