import React, { useState } from 'react'
import '../styles/AlbumDetaile.css'
import { FaHeart } from 'react-icons/fa';
import { useUser } from './UserProvider';
import axios from 'axios';


function AlbumDetail() {
    const { getList, audioValue, getUser } = useUser()
    const [likedSong, setLikedSong] = useState([])

    const likeSong = async (songId) => {
        //fetcing with fetch();
        // let response = await fetch('https://academics.newtonschool.co/api/v1/music/album?limit=200', {
        //     headers: {
        //         'projectId': 'a5nndsn87zys'

        //     }
        // });
        // let data = await response.json();
        // let results = data.data
        // console.log(data.data)





        //fetching with axios;
        try {
            await axios.patch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
                "songId": songId
            }, {
                headers: {
                    Authorization: `Bearer ${getUser?.token}`
                }
            });

            setLikedSong((preLikesongs) => {
                if (preLikesongs.includes(songId)) {
                    return preLikesongs.filter(id => id !== songId)
                } else {
                    return [...preLikesongs, songId]
                }
            });
        } catch (error) {
            console.log(error)
        }



    }

    // console.log(getList)
    const handleSong = (item) => {
        audioValue({ item })
    }

    const handleClick = async (id) => {
        try {
            await axios.get(`https://academics.newtonschool.co/api/v1/music/song/${id}`).then((response) => {
                // console.log(response.data.data)
                let data = response.data.data
                // console.log(data)
                handleSong(data)
            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err.message)
        }

    }

    //like button color

    const colorHandler = () => {
        setColor(!getColor);
    }


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
                            songs: {getList.songs?.length}
                        </p>
                    </div>
                    {
                        getList.songs?.map((song, index) => {
                            const isLiked = likedSong.includes(song._id);
                            return (
                                <div className="songs_list_container" key={index} >
                                    <div className="songs-details " onClick={() => handleClick(song._id)}>
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
                                    <div className="artist_info songs_item">
                                        {/* {
                                            song.artist.map((artist, index) => {
                                                return (
                                                    <span key={index}>{artist}</span>
                                                )
                                            })
                                        } */}
                                        Artist
                                    </div>
                                    <div className="album_detail songs_item">
                                        album details
                                    </div>
                                    <div className="song_lenght songs_item">
                                        3:45
                                    </div>
                                    <div className="like_button songs_item">
                                        <FaHeart onClick={() => likeSong(song._id)} style={{ fill: isLiked ? 'red' : '#ffffffe0' }} />
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
