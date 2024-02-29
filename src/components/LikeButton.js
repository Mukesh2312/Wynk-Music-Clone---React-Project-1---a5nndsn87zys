import React from 'react'
import { FaHeart } from 'react-icons/fa'
import '../styles/LikeBtn.css'

function LikeButton() {
    return (
        <div id='like_btn' >
            <FaHeart className='heart_icon' />
        </div>
    )
}

export default LikeButton
