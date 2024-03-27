import React from 'react'
import '../styles/SecondryNav.css'
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import { useUser } from './UserProvider';

const SmallDeviceMenu = ({ sideBarHandler, bodyScrollingControl, onChangeHandler }) => {

    const { getUser } = useUser();

    return (

        <div id="smalldevicemanu">
            <div className="second_nav_container">
                <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                    <NavLink to='/' className='item'>All</NavLink>
                </div>
                <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                    <NavLink to='/trendingsongs' className='item'>Trending Now</NavLink>
                </div>
                <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                    <NavLink to='/songs' className='item'>Songs</NavLink>
                </div>
                <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                    <NavLink to='/underconstruction' className='item'>New Songs</NavLink>
                </div>
                <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                    <NavLink to='/underconstruction' className='item'>Moods & Genre</NavLink>
                </div>
                <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                    <NavLink to='/album' className='item'>Top Albums</NavLink>
                </div>
                <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                    <NavLink to='/underconstruction' className='item'>Top Artists</NavLink>
                </div>
                <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                    <NavLink to='/underconstruction' className='item'>Top Playlists</NavLink>
                </div>

                <br />
                <br />

                {
                    !getUser && <>

                        <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                            <NavLink to='/login' className='item'><FaUser /> Login</NavLink>
                        </div>
                        <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); }}>
                            <NavLink to='/Register' className='item'><FaUser /> Sign Up</NavLink>
                        </div>
                    </>
                }

                {
                    getUser && getUser.status == 'success' &&
                    <div className="nav_items" onClick={() => { sideBarHandler(); bodyScrollingControl(false); onChangeHandler() }}>
                        <NavLink to='/' className='item'><FaUser />  Logout</NavLink>
                    </div>
                }


            </div>
        </div>
    )

}

export default SmallDeviceMenu;