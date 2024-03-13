import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Register.css';
import { useUser } from "./UserProvider";

const UpdatePassword = () => {
    const { getUser } = useUser()
    const [newPassword, setNewPassword] = useState({
        name: '',
        email: '',
        passwordCurrent: '',
        password: '',
        appType: 'music',
    })
    const navigate = useNavigate();

    const updatepas = async (e) => {
        e.preventDefault()
        try {
            await axios.patch('https://academics.newtonschool.co/api/v1/user/updateMyPassword', newPassword, {
                headers: {
                    Authorization: `Bearer ${getUser?.token}`,
                    'Content-Type': 'application/json'

                }
            }).then((Response) => {
                navigate('/login')
                console.log(Response)
            })
        } catch (err) {
            console.log(err)
        }
    }

    const onChangerHandler = (e) => {
        setNewPassword(newPassword => ({ ...newPassword, [e.target.name]: e.target.value }))
    }

    return (
        <div id="updatepassword" className="Register_container">
            <div className="form_container">


                <div className="register_heading">
                    <h2>    Update Password</h2>
                </div>
                <div className="register_form">

                    <form onSubmit={updatepas}>
                        <input type="text" name="name" value={newPassword.name} id="name" placeholder="Name" required autoComplete="off" onChange={onChangerHandler} />
                        <input type="text" name="email" value={newPassword.email} id="email" placeholder="Email" required autoComplete="off" onChange={onChangerHandler} />
                        <input type="password" name="passwordCurrent" value={newPassword.passwordCurrent} id="password" placeholder="Password" required autoComplete="off" onChange={onChangerHandler} />
                        <input type="password" name="password" value={newPassword.password} placeholder="Password" required autoComplete="off" onChange={onChangerHandler} />

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

export default UpdatePassword;