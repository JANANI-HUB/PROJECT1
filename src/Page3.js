// eslint-disable-next-line
import React from 'react';
import './Page3.css';
export default function Page3() {
return (
<>
<center>
<div className='demo'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM35D9k88rgotfv791Och_V6Jkyguwa8aheg&usqp=CAU" alt="Login"/>
<p>Login</p>
<div className='dd'>
<label>Username:</label>
<input type="text" className='demo1'></input><br></br><br></br>
<label>Password:</label>
<input type="password" className='demo2'></input><br></br><br></br>
<input type="submit" value="Login" className='submit' ></input><br></br><br></br>
<p1>Or</p1><br></br>
<a href="http://localhost:3000/">Create new Account?</a>
</div>

</div>
</center>
</>
)
}