import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import '../styles/Songs.css'
import '../styles/NewsongsSlider.css'
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';


const NewsongSlider = (props) => {
    const navigate = useNavigate()
    const { setList } = useUser();
    const [newsongs, setNewsongs] = useState([]);

    useEffect(() => {
        getNewSongs('Trending songs')
    }, [])
    const getNewSongs = async (input) => {

        const queryString = {
            featured: input
        }

        try {
            await axios.get('https://academics.newtonschool.co/api/v1/music/song?limit=12', {
                params: {
                    filter: JSON.stringify(queryString)
                }
            }).then((Response) => {
                console.log(Response.data.data)
                setNewsongs(Response.data.data);
            })
        } catch (err) {
            console.log(err)
        }

    }



    const handleClick = async (id) => {
        await axios.get(`https://academics.newtonschool.co/api/v1/music/song/${id}`).then((Response) => {
            setList(Response.data.data)
            console.log(Response.data.data)

        }).catch((err) => {
            console.log(err)
        })
        // navigate('/Albumdetails');
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="song_slider_container">
            <div className="songs_outer_container">
                <h2>Featured Song</h2>
                <Slider {...settings}>

                    {
                        newsongs && newsongs.map((song, index) => {
                            return (
                                <div className="song_inner_container" key={index} >
                                    <div className="song_thumbnail" onClick={() => handleClick(song._id)}>
                                        <img src={song.thumbnail} alt={song.title} />
                                        <div className="overlay" >
                                            <span className="play-button">&#9654;</span>
                                        </div>
                                    </div>
                                    <h4>{song.title}</h4>

                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
    )
}
export default NewsongSlider;