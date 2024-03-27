import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Banner.css'




function Banner() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "310px",
        slidesToShow: 1,
        speed: 400,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    autoplay: true,
                    centerPadding: "60px",
                    slidesToShow: 1,
                    speed: 400,
                }
            },
            {
                breakpoint: 1190,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    autoplay: true,
                    centerPadding: "80px",
                    slidesToShow: 1,
                    speed: 400,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    autoplay: true,
                    centerPadding: "30px",
                    slidesToShow: 1,
                    speed: 400,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    autoplay: true,
                    centerPadding: "10px",
                    slidesToShow: 1,
                    speed: 400,


                }
            }
        ]

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
        src: 'bannerImage/shivji.webp'
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
        src: 'bannerImage/Bhajan.webp'
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