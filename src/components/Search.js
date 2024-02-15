import React, { useState } from 'react'
import '../styles/Search.css'
import { useUser } from './UserProvider';

import AlbumDetail from './AlbumDetail';


function Search() {

    const { upDateSongs } = useUser();

    console.log(upDateSongs)
    return (
        <div className='search_container'>
            <h1 style={{ color: 'white' }}>Search Result will be here</h1>
        </div>
    )
}

export default Search;
