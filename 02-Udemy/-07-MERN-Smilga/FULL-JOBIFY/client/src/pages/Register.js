import { useState, useEffect } from "react"
import '../assets/wrappers/RegisterPage.css'
import Logo from "./Logo"

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState) 

 const handleChange = (e)=>{
        console.log(e.target);
    }
    const onSubmit=(e)=>{
        e.preventdefault()
        console.log(e.target);
    }
    
    return (
        <div className="full-page">
            <Logo/>
            <h3>Login</h3>
            <div className="form-row">
                <label htmlFor="name" className="form-lable">name</label>
                <input type="text"  value={values.name} name="name" onChange={handleChange} className="form-input" />


            </div>

        </div>
  )
}
export default Register