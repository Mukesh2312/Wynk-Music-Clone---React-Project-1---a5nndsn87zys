import React from 'react'
import '../styles/AudioPlayer.css'
import { useUser } from './UserProvider'
import LikeButton from './LikeButton'

function AudioPlayer(props) {
    const { currentItem } = useUser()
    const songData = currentItem.item;
    console.log(songData)
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
            </div>
        </div>
    )
}

export default AudioPlayer
