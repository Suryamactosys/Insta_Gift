import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/logo.svg';
// import useAuth from '../../hooks/useAuth';
import pro_img from '../../Assets/images/profile-upload-img.svg';

const Demo = () => {

    const auth = localStorage.getItem('user');
    const naviagte = useNavigate();
    const logout = () => {
        localStorage.clear();
        naviagte('/login');
    }
    return (
        <div>
            {
                auth ? <>
                <nav class="navbar navbar-expand-lg sp_navbar bg-light">
                <div class="container">
                    <div>
                        <Link href="#"><img src={logo} alt="img" /></Link>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse sp_collapse_wrap" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link fs-5" to="/" aria-label="Homepage">
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fs-5" to="/" aria-label="A sample content page">
                                    Business
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fs-5" to="/">
                                    Members
                                </Link>
                            </li>
                            {/* <li class="nav-item">
                                            <img src="https://instagift.mactosys.com/public/assets/images/special-icon (2).svg" alt="" />
                                            <a class="nav-link fs-5" href="javascript:;" aria-label="A system message page" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Special
                                            </a>
                                        </li> */}
                            <li class="nav-item">
                                <Link class="nav-link fs-5" to="/contact-us" aria-label="A system message page">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="#" aria-label="user profile" className="dropdown-toggle sp_user_img show" data-bs-toggle="dropdown" aria-expanded="true">
                        <img src={pro_img} width="40px" alt="img" /><span className="ms-3">Surya</span></Link>
                    <ul className="dropdown-menu show" data-bs-popper="static">
                        <li>
                            <div className="sp_client_name">
                                <div> <img src={pro_img} width="50px" alt="image" />
                                </div>
                                <div>
                                    <h6>Surya</h6>
                                    <p>Househusband</p>
                                </div>
                            </div>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/dashboard"><img src="assets/images/settings.svg" className="me-2" alt="" /> Dashboard</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/profile"><img src="assets/images/settings.svg" className="me-2" alt="" /> Profile Settings</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/loginpage"><img src="assets/images/sign out.svg" className="me-2" alt="" /> Sign Out</Link></li>
                        <div className="sp_drop_icon"><i className="bi bi-caret-up-fill"></i></div>
                    </ul>
                </div>
                </nav>
                </>
                    : <>
                        <nav class="navbar navbar-expand-lg sp_navbar bg-light">
                            <div class="container">
                                <div>
                                    <Link href="#"><img src={logo} alt="img" /></Link>
                                </div>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse sp_collapse_wrap" id="navbarSupportedContent">
                                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <Link class="nav-link fs-5" to="/" aria-label="Homepage">
                                                Home
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link fs-5" to="/" aria-label="A sample content page">
                                                Business
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link fs-5" to="/">
                                                Members
                                            </Link>
                                        </li>
                                        {/* <li class="nav-item">
                                    <img src="https://instagift.mactosys.com/public/assets/images/special-icon (2).svg" alt="" />
                                    <a class="nav-link fs-5" href="javascript:;" aria-label="A system message page" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Special
                                    </a>
                                </li> */}
                                        <li class="nav-item">
                                            <Link class="nav-link fs-5" to="/contact-us" aria-label="A system message page">
                                                Contact us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <Link to="/loginpage" class="sp_outline-btn">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </>
            }
        </div>
    )
}

export default Demo;
