import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Banner.css'
import CustomSlickArrows from './CustomSlickArrows';



function Banner() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "310px",
        slidesToShow: 1,
        speed: 400
    };

    return (
        <div className='Banner_container'>

            <Slider {...settings}>
                {
                    bannerImgLink.map((img, index) => {
                        return (
                            <div key={index} className='banner_img_container'>

                                <img src={img.src} alt="image" />
                            </div>
                        )
                    })
                }
            </Slider>

            {/* <Slider {...settings}>
                <div className='banner_img_container'>
                    <img src="bannerImage/Bhajan.webp" alt="logo" />
                </div>
                <div className='banner_img_container'>
                    <img src="bannerImage/Bhajan.webp" alt="logo" />
                </div>
                <div className='banner_img_container'>
                    <img src="bannerImage/Bhajan.webp" alt="logo" />
                </div>
                <div className='banner_img_container'>
                    <img src="bannerImage/Bhajan.webp" alt="logo" />
                </div>
                <div className='banner_img_container'>
                    <img src="bannerImage/Bhajan.webp" alt="logo" />
                </div>
                <div className='banner_img_container'>
                    <img src="bannerImage/Bhajan.webp" alt="logo" />
                </div>
            </Slider> */}
        </div>
    )

}

const bannerImgLink = [
    {
        src: 'bannerImage/Bhajan.webp'
    },
    {
        src: 'bannerImage/Bollywood.webp'
    },
    {
        src: 'bannerImage/Dunki.webp'

    },
    {
        src: 'bannerImage/Emotion_songs.webp'
    },
    {
        src: 'bannerImage/Freshe.webp'
    },
    {
        src: 'bannerImage/Hot_right_now.webp'
    },
    {
        src: 'bannerImage/Love_hits.webp'
    },
    {
        src: 'bannerImage/Love_songs.webp'
    },
    {
        src: 'bannerImage/New_in_rock.webp'
    },

];


export default Banner;