import React from "react";
import '../styles/Register.css';

const Register = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    }
    return (
        <div className="Register_container">
            <div className="form_container">


                <div className="register_heading">
                    <h2>Register</h2>
                </div>
                <div className="register_form">
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name="name" id="name" placeholder="Name" required autoComplete="off" />
                        <input type="text" name="email" id="email" placeholder="Email" required autoComplete="off" />
                        <input type="password" name="password" id="password" placeholder="Password" required autoComplete="off" />

                        <label htmlFor="appType">App Type</label>
                        <select name="appType" id="appType" required>
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