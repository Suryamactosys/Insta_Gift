import React from 'react';
import gifts3 from '../../Assets/images/gift_3.png';
import Image_poster_2 from '../../Assets/images/Image-poster-2.png';
import image_postser_1 from '../../Assets/images/image-postser-1.png';
import logo from '../../Assets/images/logo.svg';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <footer className="text-center text-lg-start text-dark">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <img src={logo} alt="" />
                                <p>
                                    Our Curated Collection Of Surprises Is Designed To Cater To Every Taste And Preference.
                                </p>
                                <h4>Our Office</h4>
                                <p><i className="fas fa-home mr-3"></i> 5872 Main St Williamsville</p>
                                <p><i className="fas fa-envelope mr-3"></i> North Dakota 14221 United States</p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">QUICK LINKS</h6>
                                <p>
                                    <Link to="/home" style={{ textDecoration: 'none' }} className="text-dark">Home</Link>
                                </p>
                                <p>
                                    <Link to="/home" style={{ textDecoration: 'none' }} className="text-dark">Shop</Link>
                                </p>
                                <p>
                                    <Link to="/home" style={{ textDecoration: 'none' }} className="text-dark">Special</Link>
                                </p>
                                <p>
                                    <Link to="/contact" style={{ textDecoration: 'none' }} className="text-dark">Contact Us</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">QUICK VIEW</h6>
                                <div className="carousel slide" data-bs-ride="carousel">
                                    <div>
                                        <div className="carousel-item active">
                                            <img src={gifts3} alt="img" className="image" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={Image_poster_2} alt="img" className="image" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={image_postser_1} alt="img" className="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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