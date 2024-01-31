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
                        <p>
                            Wynk Music
                        </p>
                    </NavLink>



                </div>
                <div className="header_links_container">
                    <div className="search_box">
                        <NavLink to='/search' className='search_navlink'>

                            <input type="text" placeholder="Search Music" onChange={onSearchHandler} />
                        </NavLink>
                    </div>
                    <div className="subcription">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"><g clipPath="url(#clip0_1943_5431)"><rect x="4.125" y={3} width="15.75" height={18} rx={2} stroke="currentColor" strokeWidth="1.5" /><path d="M9 16.1738H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><g clipPath="url(#clip1_1943_5431)"><path d="M12.3372 13.2729L10.176 10.5687L10.1885 10.0328C11.2028 10.1027 11.9914 9.99537 12.1748 9.03592L10.0136 9.02351L10.3634 8.43772L12.0874 8.46254C11.8247 7.9166 11.1023 7.84931 9.97607 7.8894L10.3634 7.31602L14.0239 7.31055L13.6616 7.87679H12.6496C12.8346 8.07203 12.97 8.29667 12.9745 8.48742L14.0239 8.47496L13.6616 9.03574L12.962 9.0482C12.8527 9.88472 12.0842 10.38 11.113 10.4938L13.2887 13.2722L12.3373 13.2727V13.2727L12.3372 13.2729Z" fill="currentColor" stroke="currentColor" strokeWidth="0.00236424" /></g></g><defs><clipPath id="clip0_1943_5431"><rect width={24} height={24} fill="white" /></clipPath><clipPath id="clip1_1943_5431"><rect width="4.05064" height="5.97455" fill="white" transform="translate(9.97461 7.30078)" /></clipPath></defs></svg>

                        </span>
                        <p>Manage Subscription</p>
                    </div>
                    <div className="vertical_line">

                    </div>
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