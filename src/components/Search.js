import React, { useState } from 'react'
import '../styles/Search.css'
import { useUser } from './UserProvider';
import axios from 'axios';

function Search() {
    const { searchSong, audioValue } = useUser();

    const setSong = (item) => {
        audioValue({ item })
    }

    const handleClick = async (id) => {
        await axios.get(`https://academics.newtonschool.co/api/v1/music/song/${id}`).then((Response) => {
            console.log(Response)
            let currSong = Response.data.data
            setSong(currSong)
        }).catch((err) => {
            console.log(err)
        })
    }
    // setTimeout(() => {

    //     console.log(searchSong[0]?._id)
    // }, 2000)
    // 

    return (
        <div className='search_container'>
            <h1 style={{ color: 'white' }}>Search Result will be here</h1>
            {
                searchSong?.map((song, index) => {
                    return (
                        <div className="song_container" key={index} onClick={() => handleClick(song._id)}>

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
