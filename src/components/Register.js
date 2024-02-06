import React, { useState } from "react";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
import axios from 'axios';
>>>>>>> f5cbfa3e5db6fea98baa219587c7715879d61a2e
import '../styles/Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [getData, setData] = useState({
        name: '',
        email: '',
        password: '',
        appType: 'music'

<<<<<<< HEAD
    const [getData, setData] = useState({
        name: '',
        email: '',
        password: '',
        appType: 'music'

=======
>>>>>>> f5cbfa3e5db6fea98baa219587c7715879d61a2e
    })
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("https://academics.newtonschool.co/api/v1/user/signup", getData).then((response) => {
            navigate('/login');
            console.log(log)
        }).catch((error) => {
            console.log(error)
        })
    }

    const onChangerHandler = (e) => {
        setData({ ...getData, [e.target.name]: e.target.value })

    }

    const onChangerHandler = () => {
        console.log(getData)
    }
    return (
        <div className="Register_container">
            <div className="form_container">


                <div className="register_heading">
                    <h2>Register</h2>
                </div>
                <div className="register_form">
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name="name" value={getData.name} id="name" placeholder="Name" required autoComplete="off" onChange={onChangerHandler} />
                        <input type="text" name="email" value={getData.email} id="email" placeholder="Email" required autoComplete="off" onChange={onChangerHandler} />
                        <input type="password" name="password" value={getData.password} id="password" placeholder="Password" required autoComplete="off" onChange={onChangerHandler} />

                        <label htmlFor="appType" >App Type</label>
                        <select name="appType" onChange={onChangerHandler} id="appType" required>
                            <option value="music">music</option>
                            <option value="album">album</option>
                        </select>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;