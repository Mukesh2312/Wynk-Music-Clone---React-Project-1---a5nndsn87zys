import React, { useState } from 'react'
import '../styles/Search.css'
import { useUser } from './UserProvider';
import AudioPlayer from './AudioPlayer';
function Search() {
    const { searchSong } = useUser();


    return (
        <div className='search_container'>
            <h1 style={{ color: 'white' }}>Search Result will be here</h1>
            {
                searchSong?.map((song, index) => {
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
            <AudioPlayer />
        </div>
    )
}

export default Search;
