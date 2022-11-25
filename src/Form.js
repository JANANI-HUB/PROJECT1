import { useState} from 'react';
import './Form.css';
function ValidatingForm() {
  
    const initValues={username:'',email:'',password:''}
  
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.username)
        errors.username="Username is Required";
        else if(values.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(values.username))
        errors.username="Username must contain only alphabets";

        if(!values.email)
        errors.email="Email is Required";
        
        if(!values.password)
        errors.password="Password is Required";
        else if(!preg.test(values.password))
        errors.password="Format of Password is not corrcet";
        return errors;
    }

    return ( 
        <>
        <center><br></br><br></br>
        <div className='container'>
            {
                Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{background:"green",color:"white"}}>Signed In Successfully</h1>)
                :(<pre>{JSON.stringify(formValues,undefined,3)}</pre>)
            }
        <form onSubmit={handleSubmit}>
            <div className='row'>
            <h1>Registration Form</h1><br></br>
            
                <label>User Name&nbsp;&nbsp;</label>
                <input type="text" id='username' placeholder='Type User Name' value={formValues.username}
                    onChange={handleChange}/>
           
            <p  style={{color:"blue"}}>{formErrors.username}</p><br></br>

            
                <label>E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="email" id='email' placeholder='Type User Email-id ' value={formValues.email}
                    onChange={handleChange}/>
            
            <p  style={{color:"blue"}}>{formErrors.email}</p><br></br>

            
                <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="password" id='password' placeholder='Type User Password' value={formValues.password}
                    onChange={handleChange}/>
            
            <p  style={{color:"blue"}}>{formErrors.password}</p><br></br>

            
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </div>
        </center>
        </>
     );
}

export default ValidatingForm