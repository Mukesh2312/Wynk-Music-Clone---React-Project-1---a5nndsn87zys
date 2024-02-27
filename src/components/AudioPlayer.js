import React from 'react'
import '../styles/AudioPlayer.css'
import { useUser } from './UserProvider'

function AudioPlayer(props) {
    const { currentItem } = useUser()
    const songData = currentItem.item;
    // console.log(songData)
    return (
        <div className="audio-player">
            <audio src={songData && songData.audio_url} controls autoPlay></audio>
        </div>
    )
}

export default AudioPlayer
