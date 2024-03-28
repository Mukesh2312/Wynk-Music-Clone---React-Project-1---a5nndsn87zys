import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import axios from "axios";
import { useUser } from "./UserProvider";
import { useNavigate } from "react-router-dom";
import '../styles/Songs.css'

const TopAlbums = () => {
    const [music, setMusic] = useState([]);
    const [loader, setLoader] = useState(false);


    const { setList } = useUser();
    const navigate = useNavigate()

    useEffect(() => {
        setLoader(true)
        Album()
    }, [])
    const Album = async () => {
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
        await axios.get('https://academics.newtonschool.co/api/v1/music/album?limit=50').then((Response) => {
            // console.log(Response.data.data);
            let data = Response.data.data;
            setMusic(data)
            setLoader(false);
        }).catch((error) => {
            console.log(error);
        })
    }

    const onclickAlbum = async (id) => {
        await axios.get(`https://academics.newtonschool.co/api/v1/music/album/${id}`).then((response) => {
            // console.log(response.data.data)
            setList(response.data.data);
            navigate(`/Albumdetails`)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div id="album_section">

            {loader ? <Loader /> :

                <div className="songs_outer_container">

                    {
                        music.map((song) => {
                            return (
                                <div className="song_inner_container" key={song._id} onClick={() => onclickAlbum(song._id)}>
                                    <div className="song_thumbnail">
                                        <img src={song.image} alt={song.title} />
                                        <div className="overlay">
                                            <span className="play-button">&#9654;</span>
                                        </div>
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

export default TopAlbums;