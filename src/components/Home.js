import React, { useState, useEffect } from "react";
import '../styles/Songs.css'
import '../styles/Home.css'
import Loader from "./Loader";
import axios from "axios";
import Banner from "./Banner";


import { useUser } from "./UserProvider";
import { useNavigate } from "react-router-dom";

import NewsongSlider from "./NewsongSlider";


const Home = () => {

    const [loader, setLoader] = useState(false);
    const [trendingSong, setTrendingSong] = useState([]);


    const { setList } = useUser();
    const navigate = useNavigate()

    const onclickAlbum = async (id) => {
        await axios.get(`https://academics.newtonschool.co/api/v1/music/album/${id}`).then((response) => {
            // console.log(response.data.data)
            setList(response.data.data);
            navigate(`/Albumdetails`)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {



        setLoader(true)



        // =====trending song () call start
        getNewSongs('Trending songs')
        // =====trending song () call end
    }, [])


    // ===============================➡️➡️➡️➡️Trendin song API calling ✅start⬅️⬅️⬅️⬅️=======================

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
                setTrendingSong(Response.data.data);
                setLoader(false)
            })
        } catch (err) {
            console.log(err)
        }

    }

    // ===============================➡️➡️➡️➡️Trendin song API calling ✅end⬅️⬅️⬅️⬅️=======================

    return (
        <div className="music-collection">
            <div className="banner_contianer_for_margin">

                {
                    loader ? <Loader /> : <Banner />
                }
            </div>


            {loader ? <Loader /> :
                <div className="hsongcontainer">
                    <NewsongSlider trendingSong={trendingSong} heading={'Trending Song'} />
                </div>

            }

        </div>
    )
}

export default Home;