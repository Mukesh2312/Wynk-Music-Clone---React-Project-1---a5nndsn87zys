import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import { useUser } from './UserProvider'

const Player = () => {
    const { currentItem, getUser } = useUser()
    const songData = currentItem && currentItem.item || currentItem.input;
    return (


        <AudioPlayer
            autoPlay
            src={songData && songData.audio_url}
            onPlay={e => console.log("onPlay")}
            showSkipControls={true}
            showJumpControls={false}
        // other props here
        />
    )

}

export default Player
