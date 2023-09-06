import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../../Assets/images/logo.svg';
import img_1 from '../../Assets/images/footerimg/footer-img.jpg';
import img_2 from '../../Assets/images/footerimg/footer-img2.jpg';
import img_3 from '../../Assets/images/footerimg/footer-img3.jpg';
import img_4 from '../../Assets/images/footerimg/footer-img4.jpg';
import './Footer.css';

const Footer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div style={{backgroundColor:'#F2F5F5' }}>
            <footer className='sp_footer2_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="sp_footer_links">
                                <h2>
                                    <a href="/">
                                        <img src={logo} alt="" />
                                    </a>
                                </h2>
                                <p className="m-0 sp_footer_title">Our curated collection of surprises is designed to cater to every taste and preference. </p>
                                <h3 className="mt-3">Our Office</h3>
                                <p>5872 Main St Williamsville <br /> North Dakota 14221 United States</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="sp_footer_links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Business</a></li>
                                    <li><a href="/">Members</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="sp_footer_links" style={{paddingBottom:'25px'}}>
                                <h3 className="mt-3 mt-md-0">Surprise Them</h3>
                                <Slider {...settings}>
                                    <div>
                                        <img src={img_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_2} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_3} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_4} alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer1">
                <div className="footer-content">
                    <p>© 2023 All rights reseverd</p>
                    <ul className="footer-links">
                        <li><a href="/" className="text-white me-4"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="/" className="text-white me-4"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="/" className="text-white me-4"><i className="bi bi-youtube"></i></a></li>
                        <li><a href="/" className="text-white me-4"><i className="bi bi-twitter"></i></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;