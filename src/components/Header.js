import React, { useState } from "react";
import axios from 'axios';

import '../styles/Header.css'
import { FaUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom";



const Header = () => {

    const [list, setList] = useState([])

    const onSearchHandler = (event) => {
        let searchQuery = {
            title: event.target.value
        }
        axios.get('https://academics.newtonschool.co/api/v1/music/song?', { params: { search: JSON.stringify(searchQuery) } })
            .then((Response) => {
                setList(response.data.data)
            }).catch((error) => {
                console.log(error)
            })
    }

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
                    <input type="text" placeholder="Search Music" onChange={onSearchHandler} />
                </div>
                <div className="header_links_container">
                    <ul>
                        <li>
                            <NavLink to='/register' className='login_btn'>
                                <FaUser className="faUser" />
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header;