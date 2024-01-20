import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import axios from 'axios'


const Login = () => {

    const [getData, setData] = useState({
        email: '',
        password: '',
        appType: 'music'
    })
    const [getError, setError] = useState('');


    const onSubmitHandler = (e) => {
        setError('')
        e.preventDefault();

        axios.post("https://academics.newtonschool.co/api/v1/user/login", getData).then((response) => {
            navigate('/songs')
            console.log(response)

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
        <div className="login_container">
            <div className="login_inner_container">
                <div className="login_heading">
                    <h2>Login</h2>
                </div>
                <div className="login_form_container">
                    {getError}
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name='email' value={getData.email} id='email' autoComplete='off' placeholder='Email Address' required onChange={onChangerHandler} />
                        <input type="text" name='password' value={getData.password} id='email' autoComplete='off' placeholder='Password' required onChange={onChangerHandler} />
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

export default Login;