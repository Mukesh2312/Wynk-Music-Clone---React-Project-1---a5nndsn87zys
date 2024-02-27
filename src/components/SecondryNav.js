import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/SecondryNav.css'

function SecondryNav() {
    return (
        <div className='second_nav'>
            <div className="second_nav_container">
                <div className="nav_items">
                    <NavLink to='/' className='item'>All</NavLink>
                </div>
                <div className="nav_items">
                    <NavLink to='/search' className='item'>Trending Now</NavLink>
                </div>
                <div className="nav_items">
                    <NavLink to='/songs' className='item'>Songs</NavLink>
                </div>
                <div className="nav_items">
                    <NavLink to='/' className='item'>New Songs</NavLink>
                </div>
                <div className="nav_items">
                    <NavLink to='/' className='item'>Moods & Genre</NavLink>
                </div>
                <div className="nav_items">
                    <NavLink to='/album' className='item'>Top Albums</NavLink>
                </div>
                <div className="nav_items">
                    <NavLink to='/' className='item'>Top Artists</NavLink>
                </div>
                <div className="nav_items">
                    <NavLink to='/' className='item'>Top Playlists</NavLink>
                </div>

            </div>
        </div>
    )
}

export default SecondryNav;