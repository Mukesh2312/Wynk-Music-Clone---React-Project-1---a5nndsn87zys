import React, { useState, useEffect } from "react";
import '../styles/Songs.css'
import Loader from "./Loader";
import axios from "axios";
import Banner from "./Banner";
// import { faPlay } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const [music, setMusic] = useState([]);
    const [loader, setLoader] = useState(false);

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
            // console.log(data.data)




            //fetching with axios;
            axios.get('https://academics.newtonschool.co/api/v1/music/album?limit=50').then((Response) => {
                console.log(Response);
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
    return (
        <div className="music-collection">
            <div className="banner_contianer_for_margin">

                {
                    loader ? <Loader /> : <Banner />
                }
            </div>


            {loader ? <Loader /> :

                <div className="songs_outer_container">

                    {
                        music.map((song) => {
                            return (
                                <div className="song_inner_container" key={song._id}>
                                    <div className="song_thumbnail">
                                        <img src={song.image} alt={song.title} />
                                        <div class="overlay">
                                            <span class="play-button">&#9654;</span>
                                        </div>
                                    </div>
                                    <h4>{song.title}</h4>

                                </div>
                            )
                        })
                    }
                </div>}
        </div>
    )
}

export default Home;