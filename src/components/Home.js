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
    const [romanticSong, setRomanticSong] = useState([])
    const [sadSong, setSadSong] = useState([])
    const [excitedSong, setExcitedSong] = useState([])
    const [happySong, setHappySong] = useState([])

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
        getNewSongs('featured', 'Trending songs')
        getNewSongs('featured', 'Top 20 of this week')
        getNewSongs('featured', 'Top 50 of this month')
        getNewSongs('featured', 'Evergreen melodies')
        getNewSongs('featured', 'Soul soother')
        getNewSongs('mood', 'romantic')
        getNewSongs('mood', 'sad')
        getNewSongs('mood', 'excited')
        getNewSongs('mood', 'happy')
        // =====trending song () call end
    }, [])


    // ===============================➡️➡️➡️➡️Trendin song API calling ✅start⬅️⬅️⬅️⬅️=======================

    const getNewSongs = async (ty, input) => {

        const queryString = {
            [ty]: input
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
                } else if (input === 'romantic') {
                    setRomanticSong(data);
                } else if (input === 'sad') {
                    setSadSong(data);
                } else if (input === 'excited') {
                    setExcitedSong(data)
                } else if (input === 'happy') {
                    setHappySong(data)
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
                    <div className="hsongcontainer">
                        <NewsongSlider trendingSong={romanticSong} heading={'romantic songs'} />
                    </div>
                    <div className="hsongcontainer">
                        <NewsongSlider trendingSong={sadSong} heading={'sad songs'} />
                    </div>
                    <div className="hsongcontainer">
                        <NewsongSlider trendingSong={excitedSong} heading={'excited songs'} />
                    </div>
                    <div className="hsongcontainer">
                        <NewsongSlider trendingSong={happySong} heading={'happy songs'} />
                    </div>
                </>

            }

        </div>
    )
}

export default Home;