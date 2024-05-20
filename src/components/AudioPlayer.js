import React from 'react'
import '../styles/AudioPlayer.css'
// import { useUser } from './UserProvider'
import LikeButton from './LikeButton'
import { FaHeart } from 'react-icons/fa'
import axios from 'axios'

function AudioPlayer(props) {
    // const { currentItem, getUser } = useUser()
    // const songData = currentItem && currentItem.item || currentItem.input;

    console.log(songData, 'songdata')

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
        await axios.patch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
            "songId": songId
        }, {
            headers: {
                Authorization: `Bearer ${getUser?.token}`
            }
        }).then((Response) => {
            // console.log(Response);
            let data = Response.data.data;
            console.log('liked')

        }).catch((error) => {
            console.log(error);
        })
    }



    return (
        <div className="audio-player">
            <div className="music_playing_controler">

                <div className="thumbnail_title_container">

                    <img src={songData?.thumbnail} alt={songData?.title} id='current_playing_song' />
                    <div className="current_artist_container">
                        <h4 id='current_playing_song_title'>{songData?.title}</h4>
                        {
                            songData?.artist.map((art, index) => {
                                return (
                                    <small key={index} className='current_artist'>{art.name}, </small>

                                )
                            })
                        }
                    </div>
                </div>
                <audio src={songData && songData.audio_url} controls autoPlay id='audio_player_control'></audio>
                {/* <LikeButton /> */}
                {

                    songData && getUser && getUser.status == 'success' && <div className="like_button songs_item">
                        <FaHeart onClick={() => likeSong(songData._id)} />
                    </div>
                }
            </div>
        </div>
    )
}

export default AudioPlayer
