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
    const [topTwentySong, setTopTwentySong] = useState([]);
    const [topFiftySong, setTopFiftySong] = useState([]);
    const [evergren, setEvergreen] = useState([]);
    const [soul, setsoul] = useState([]);


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
        getNewSongs('Top 20 of this week')
        getNewSongs('Top 50 of this month')
        getNewSongs('Evergreen melodies')
        getNewSongs('Soul soother')
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
                let data = Response.data.data;
                if (input === 'Trending songs') {
                    setTrendingSong(data);
                } else if (input === 'Top 20 of this week') {
                    setTopTwentySong(data);
                } else if (input === 'Top 50 of this month') {
                    setTopFiftySong(data);
                } else if (input === 'Evergreen melodies') {
                    setEvergreen(data);
                } else if (input === 'Soul soother') {
                    setsoul(data);
                }
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
                <>


                    <div className="hsongcontainer">
                        <NewsongSlider trendingSong={trendingSong} heading={'Trending Song'} />
                    </div>
                    <div className="hsongcontainer">
                        <NewsongSlider trendingSong={topTwentySong} heading={'Top 20 of this week'} />
                    </div>
                    <div className="hsongcontainer">
                        <NewsongSlider trendingSong={topFiftySong} heading={'Top 50 of this month'} />
                    </div>
                    <div className="hsongcontainer">
                        <NewsongSlider trendingSong={evergren} heading={'evergreen melodies'} />
                    </div>
                    <div className="hsongcontainer">
                        <NewsongSlider trendingSong={soul} heading={'soul soother'} />
                    </div>
                </>

            }

        </div>
    )
}

export default Home;