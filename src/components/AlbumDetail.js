import React, { useState, useEffect } from 'react'
import '../styles/AlbumDetaile.css'
import axios from "axios";
import { useUser } from './UserProvider';


function AlbumDetail() {
    const [album, setAlbum] = useState({ getList });

    const { getList } = useUser()
    console.log(getList)



    return (
        <div className='album_detail_section'>



            <div className="album_song_container">
                <div className="left_content">
                    <div className="album_main_img_container">

                        <img src={getList.image} alt="album_logo" />
                    </div>
                </div>
                <div className="right_content">
                    <div className="header_right_content">

                        <h1 className='album_heading'>
                            {getList.title}
                        </h1>
                        <p className='album_length'>
                            songs: {getList.songs.length}
                        </p>
                    </div>
                    {
                        getList.songs.map((song, index) => {
                            return (
                                <div className="songs_list_container" key={index}>
                                    <div className="songs-details">
                                        <div className="serial_no">
                                            {index + 1}
                                        </div>
                                        <div className="song_img_name">
                                            <div className="song_img_contianer">

                                                <img src={song.thumbnail} alt="image" />
                                            </div>
                                            <div className="song_name_contianer">
                                                {song.title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="artist_info">
                                        {/* {
                                            song.artist.map((artist, index) => {
                                                return (
                                                    <span key={index}>{artist}</span>
                                                )
                                            })
                                        } */}
                                        Artist
                                    </div>
                                    <div className="album_detail">
                                        album details
                                    </div>
                                    <div className="song_lenght">
                                        3:45
                                    </div>
                                    <div className="like_button">
                                        like
                                    </div>

                                </div>
                            )
                        })
                    }


                </div>
            </div>



        </div>
    )
}

export default AlbumDetail;
