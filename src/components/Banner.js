import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Banner.css'
import axios from 'axios';
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';




function Banner() {
    const { setList } = useUser()
    const navigate = useNavigate();
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "310px",
        slidesToShow: 1,
        speed: 500,
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

    const BannerAlbum = async (id) => {
        try {
            axios.get(`https://academics.newtonschool.co/api/v1/music/album/${id}`).then((response) => {
                let data = response.data.data;
                console.log(data)
                setList(data);
                navigate('/Albumdetails');

            }).catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='Banner_container'>

            <Slider {...settings}>
                {
                    bannerImgLink.map((img, index) => {
                        return (
                            <div key={index} className='banner_img_container' onClick={() => BannerAlbum(img.Category)}>

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
        src: 'bannerImage/shivji.webp',
        Category: '64cee72fe41f6d0a8b0cd0ce'
    },
    {
        src: 'bannerImage/Bollywood.webp',
        Category: '64cee72fe41f6d0a8b0cd0ab',
    },
    {
        src: 'bannerImage/Dunki.webp',
        Category: '64cee72fe41f6d0a8b0cd0c6'

    },
    {
        src: 'bannerImage/Emotion_songs.webp',
        Category: '64cee72fe41f6d0a8b0cd0b2'
    },
    {
        src: 'bannerImage/Bhajan.webp',
        Category: '64cee72fe41f6d0a8b0cd0ce'

    },
    {
        src: 'bannerImage/Freshe.webp',
        Category: '64cee72fe41f6d0a8b0cd0ab',

    },
    {
        src: 'bannerImage/Hot_right_now.webp',
        Category: '64cee72fe41f6d0a8b0cd0b2'

    },
    {
        src: 'bannerImage/Love_hits.webp',
        Category: '64cee72fe41f6d0a8b0cd0c6'

    },
    {
        src: 'bannerImage/Love_songs.webp',
        Category: '64cee72fe41f6d0a8b0cd0b2'

    },
    {
        src: 'bannerImage/New_in_rock.webp',
        Category: '64cee72fe41f6d0a8b0cd0b2'

    }

];


export default Banner;