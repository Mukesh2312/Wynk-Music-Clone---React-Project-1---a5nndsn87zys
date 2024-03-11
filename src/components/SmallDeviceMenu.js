import React from 'react'
import '../styles/SecondryNav.css'
import { NavLink } from 'react-router-dom';

const SmallDeviceMenu = ({ sideBarHandler }) => {
    return (
        <div id="smalldevicemanu">
            <div className="second_nav_container">
                <div className="nav_items" onClick={sideBarHandler}>
                    <NavLink to='/' className='item'>All</NavLink>
                </div>
                <div className="nav_items" onClick={sideBarHandler}>
                    <NavLink to='/trendingsongs' className='item'>Trending Now</NavLink>
                </div>
                <div className="nav_items" onClick={sideBarHandler}>
                    <NavLink to='/songs' className='item'>Songs</NavLink>
                </div>
                <div className="nav_items" onClick={sideBarHandler}>
                    <NavLink to='/underconstruction' className='item'>New Songs</NavLink>
                </div>
                <div className="nav_items" onClick={sideBarHandler}>
                    <NavLink to='/underconstruction' className='item'>Moods & Genre</NavLink>
                </div>
                <div className="nav_items" onClick={sideBarHandler}>
                    <NavLink to='/album' className='item'>Top Albums</NavLink>
                </div>
                <div className="nav_items" onClick={sideBarHandler}>
                    <NavLink to='/underconstruction' className='item'>Top Artists</NavLink>
                </div>
                <div className="nav_items" onClick={sideBarHandler}>
                    <NavLink to='/underconstruction' className='item'>Top Playlists</NavLink>
                </div>

            </div>
        </div>
    )
}

export default SmallDeviceMenu;