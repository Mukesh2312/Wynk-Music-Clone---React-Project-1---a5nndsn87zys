import React, { useState, useEffect } from "react";
import '../styles/Songs.css'
import Loader from "./Loader";
import axios from "axios";
import '../styles/Fevorite.css'
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useUser } from "./UserProvider";

const Fevorite = () => {
    const [music, setMusic] = useState([]);
    const [loader, setLoader] = useState(false);
    const { getUser, audioValue } = useUser()
    // console.log(getUser)

    useEffect(() => {


        const Songs = async (songId) => {
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
            await axios.get('https://academics.newtonschool.co/api/v1/music/favorites/like', {
                headers: {
                    Authorization: `Bearer ${getUser?.token}`
                }
            }).then((Response) => {
                // console.log(Response);
                let data = Response.data.data.songs;
                console.log(data)
                setMusic(data)
                setLoader(false);
            }).catch((error) => {
                console.log(error);
            })
        }
        setLoader(true)
        Songs()
    }, [])

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
    // console.log(music)
    return (
        <div className="music-collection ">

            <div className="fav_songs_container">




                <h2 className="fav_songs">Favorite Songs</h2>
                {loader ? <Loader /> :

                    <div className="songs_outer_containe">

                        {
                            music?.map((song) => {
                                return (
                                    <div className="song_inner_container" key={song._id} onClick={() => handleClick(song._id)}>
                                        <div className="song_thumbnail">
                                            <img src={song.thumbnail} alt={song.title} />
                                            <div className="overlay">
                                                <span className="play-button">&#9654;</span>
                                            </div>
                                        </div>
                                        <h4>{song.title}</h4>

                                    </div>
                                )
                            })
                        }
                    </div>}
            </div>
        </div>
    )
}

export default Fevorite;