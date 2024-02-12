import React from 'react'
import '../styles/AlbumDetaile.css'

function AlbumDetail() {
    return (
        <div className='album_detail_section'>
            <div className="album_song_container">
                <div className="left_content">
                    <div className="album_main_img_container">

                        <img src="https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0a7.jpg" alt="album_logo" />
                    </div>
                </div>
                <div className="right_content">
                    <div className="header_right_content">

                        <h1 className='album_heading'>
                            Kohinoor
                        </h1>
                        <p className='album_length'>
                            50 songs
                        </p>
                    </div>
                    <div className="songs_list_container">
                        <div className="songs-details">
                            <div className="serial_no">
                                1
                            </div>
                            <div className="song_img_name">
                                <div className="song_img_contianer">

                                    <img src="https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0a7.jpg" alt="image" />
                                </div>
                                <div className="song_name_contianer">
                                    song name
                                </div>
                            </div>
                        </div>
                        <div className="artist_info">
                            artist name
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
                </div>
            </div>

        </div>
    )
}

export default AlbumDetail;
