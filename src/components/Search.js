import React, { useState } from 'react'
import '../styles/Search.css'
import { useUser } from './UserProvider';
function Search() {
    const { getList } = useUser();
    console.log(getList)

    return (
        <div className='search_container'>
            <h1 style={{ color: 'white' }}>Search Result will be here</h1>
            {
                getList.map((song, index) => {
                    return (
                        <div className="song_container" key={index}>
                            <div className="song_img">
                                <img src={song.thumbnail} alt={song.title} />
                            </div>
                            <div className="song_tilte">
                                <p>{song.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Search;
