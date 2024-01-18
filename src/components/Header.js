import React from "react";
import '../styles/Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header_items_container">


                <div className="logo_container">
                    <NavLink to='/' className="logo">

                        <img src="https://img.icons8.com/color-glass/144/wynk-music.png" alt="logo" />
                        <h3>
                            Wynk Music
                        </h3>
                    </NavLink>



                </div>
                <div className="search_box">
                    <input type="text" placeholder="Search Music" />
                </div>
                <div className="header_links_container">
                    <ul>
                        <li>
                            <NavLink to='/login' className='login_btn'>Login</NavLink>
                        </li>

                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header;