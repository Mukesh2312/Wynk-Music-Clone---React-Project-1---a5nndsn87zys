import React, { useState, useEffect } from "react";
import '../styles/Songs.css'
import Loader from "./Loader";
import axios from "axios";
import Banner from "./Banner";
import { useUser } from "./UserProvider";




const Songs = () => {
    const [music, setMusic] = useState([]);
    const [loader, setLoader] = useState(false);
    const { audioValue } = useUser()

    useEffect(() => {


        const Songs = async () => {
            //fetcing with fetch();
            // let response = await fetch('https://academics.newtonschool.co/api/v1/music/album?limit=200', {
            //     headers: {
            //         'projectId': 'a5nndsn87zys'

            //     }
            // });
            // let data = await response.json();
            // let results = data.data
            // console.log(data.data);

            //fetching with axios;
            await axios.get('https://academics.newtonschool.co/api/v1/music/song?limit=600').then((Response) => {
                // console.log(Response.data.data);
                let data = Response.data.data;
                setMusic(data)
                setLoader(false);
            }).catch((error) => {
                console.log(error);
            })
        }
        setLoader(true)
        Songs()
    }, [])
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
    return (
        <div className="music-collection">

            {loader ? <Loader /> :
                <div className="songs_outer_container">

                    {

                        music.map((song) => {
                            return (
                                <div className="song_inner_container" key={song._id}>
                                    <div className="song_thumbnail" onClick={() => handleClick(song._id)}>
                                        <img src={song.thumbnail} alt={song.title} />
                                    </div>
                                    <h4>{song.title}</h4>

                                </div>
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}

export default Songs;