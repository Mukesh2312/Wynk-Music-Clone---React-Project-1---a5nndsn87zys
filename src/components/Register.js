import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../styles/Register.css';

const Register = () => {
    const [getError, setError] = useState('');

    const navigate = useNavigate();
    const [getData, setData] = useState({
        name: '',
        email: '',
        password: '',
        appType: 'music'

    })
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("https://academics.newtonschool.co/api/v1/user/signup", getData).then((response) => {
            navigate('/login');
            console.log(log)
        }).catch((error) => {
            console.log(error)
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Unknown Error Plear try after some time')
            }
        })
    }

    const onChangerHandler = (e) => {
        setData({ ...getData, [e.target.name]: e.target.value })

    }
    return (
        <div className="Register_container">
            <div className="form_container">


                <div className="register_heading">
                    <h2>Register</h2>
                </div>
                <div className="error_container" style={{ color: 'red' }}>

                    <h5>
                        {getError}
                    </h5>
                </div>
                <div className="register_form">
                    {/* {getError} */}
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