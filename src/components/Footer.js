import React from 'react'
import '../styles/Footer.css'
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
function Footer() {
    return (
        <div id='footer_section'>

            <div className="footer_content_container">
                <div className="footer_top_content">

                    <div className="para">
                        <h2>About Wynk Music</h2>
                        <p>Wynk Music is a complete package that allows you free online music streaming, set caller tunes, listen to podcasts, download MP3 music offline, and much more! Since music is essentially the only thing that can truly understand a person, we consistently offer our audience the ideal blend of MP3 Songs by their favourite artists and of versatile genres.</p>
                    </div>
                    <div className="para">
                        <h2>Play &amp; Download FREE MP3 Songs in all languages</h2>
                        <p>One of the unique features of Wynk Music is that it offers users the ability to stream music in multiple regional languages, including Hindi, Punjabi, Bengali, Tamil, Telugu, and more. Also, users of the app can download MP3 songs for offline listening. This online music platform provides access to additional features such as offline listening, high-quality audio, and exclusive content.</p>
                    </div>
                    <div className="para">
                        <h2>Wynk Music – One Stop Destination for Offline &amp; Online Music!</h2>
                        <p>Wynk Music offers users access to a vast library of music, including Indian and international tracks across various genres like Bollywood, Punjabi, pop, rock, and more. We have made online music streaming simple, fun, and all about you! So, what’s the wait for, discover and listen to millions of songs,playlists,podcasts &amp; download MP3 songs on any device including mobile for free exclusively on Wynk Music. Keep Wynking!</p>
                    </div>
                </div>
                <div className="app_container">
                    <div className="footer_right_content">

                        <div className="left_img_container">
                            <img src="footerImages/logo.png" alt="" />
                        </div>
                        <div className="txt_container">

                            <h3>
                                Best way to Listen to Music!
                            </h3>
                            <p>
                                Don’t forget to install Wynk Music on your mobile phones
                            </p>
                        </div>
                    </div>


                    <div className="right_img_contianer">
                        <div className="img">
                            <img src="/footerImages/play-store.png" alt="Play store Image" />
                        </div>
                        <div className="img">
                            <img src="/footerImages/apple-store.png" alt="App store Image" />
                        </div>
                    </div>

                </div>
                <div className="social_link-privacy_policy">
                    <div className="top_line"></div>
                    <div className="social_links_container">

                        <div className="left">
                            <h4>
                                <NavLink to='/privacy' className='f_link'>

                                    Privacy Policy
                                </NavLink>
                            </h4>
                            <div className="vrLine"></div>
                            <h4>
                                <NavLink to='/terms' className='f_link'>

                                    Terms Of Use
                                </NavLink>
                            </h4>
                        </div>
                        <div className="right">
                            <div className="fb f-social">
                                <FaFacebook />
                            </div>
                            <div className="insta f-social">
                                <FaInstagram />
                            </div>
                            <div className="twitter f-social">
                                <FaTwitter />
                            </div>
                            <div className="yt f-social">
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                    <div className="bottom_line"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;


