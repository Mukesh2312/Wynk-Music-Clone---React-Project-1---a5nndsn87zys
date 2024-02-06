import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import '../styles/Register.css';
import { useUser } from './UserProvider';

import axios from 'axios'


const Login = () => {

    const [getData, setData] = useState({
        email: '',
        password: '',
        appType: 'music'
    })
    const [getError, setError] = useState('');

    const { signInUser } = useUser();

    const onSubmitHandler = (e) => {
        setError('')
        e.preventDefault();

        axios.post("https://academics.newtonschool.co/api/v1/user/login", getData).then((response) => {
            navigate('/')
            console.log(response.data)
            signInUser({ status: response.data.status, token: response.data.token })

        }).catch((error) => {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Unknown Error Plear try after some time')
            }
        });
    }
    const onChangerHandler = (e) => {
        setData({ ...getData, [e.target.name]: e.target.value })

    }

    const navigate = useNavigate();
    return (
        <div className="login_container Register_container">
            <div className="login_inner_container form_container">
                <div className="login_heading register_heading">
                    <h2>Login</h2>
                </div>
                <div className="error_container" style={{ color: 'red' }}>

                    <h5>
                        {getError}
                    </h5>
                </div>
                <div className="login_form_container register_form">

                    <form onSubmit={onSubmitHandler} >
                        <input type="text" name='email' value={getData.email} id='email' autoComplete='off' placeholder='Email Address' required onChange={onChangerHandler} />
                        <input type="password" name='password' value={getData.password} id='password' autoComplete='off' placeholder='Password' required onChange={onChangerHandler} />
                        <label htmlFor="appType" >App Type</label>
                        <select name="appType" onChange={onChangerHandler} id="appType" required>
                            <option value="music">music</option>
                            <option value="album">album</option>
                        </select>

                        <button className="button-68" type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )

}

export default Login;