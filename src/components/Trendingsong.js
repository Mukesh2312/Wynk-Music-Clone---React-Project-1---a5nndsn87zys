import React, { useState, useEffect } from 'react'
import '../styles/Songs.css'
import Loader from "./Loader";
import axios from "axios";
import { useUser } from "./UserProvider";


const Trendingsong = () => {

    const [tsong, setTSong] = useState([])
    const [loader, setLoader] = useState(false);
    const { audioValue } = useUser()

    useEffect(() => {
        setLoader(true)
        tredingSongs('Trending songs')
    }, [])

    const tredingSongs = async (input) => {
        // console.log(input)
        const queryString = {
            featured: input
        }
        await axios.get('https://academics.newtonschool.co/api/v1/music/song', {
            params: {
                filter: JSON.stringify(queryString)
            }
        }).then((Response) => {
            // console.log(Response);
            const data = Response.data.data
            setTSong(data)
            setLoader(false)

        }).catch((err) => {
            console.log(err)
        })
    }
    console.log(tsong)
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
        <div id="trendingsongs" className='music-collection'>
            <div className="theading">

                <h2>Trending Songs</h2>
            </div>

            {loader ? <Loader /> :
                <div className="songs_outer_container">

                    {

                        tsong.map((song) => {
                            return (
                                <div className="song_inner_container" key={song._id} >
                                    <div className="song_thumbnail" onClick={() => handleClick(song._id)}>
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
                </div>
            }
        </div>
    )
}
export default Trendingsong;