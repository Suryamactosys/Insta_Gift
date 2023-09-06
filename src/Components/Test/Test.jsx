import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.svg';
import pro_img from '../../Assets/images/profile-upload-img.svg';

const Demo = () => {
    const auth = localStorage.getItem('user');

    return (
        <nav className="navbar navbar-expand-lg sp_navbar position-fixed">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="img" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse sp_collapse_wrap" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/" aria-label="Homepage">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/shop" aria-label="A sample content page">
                                Business
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/">
                                Members
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/contactus" aria-label="A system message page">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
                {auth ? (
                    <div className="dropdown">
                        <Link to="#" aria-label="user profile" className="dropdown-toggle sp_user_img show" data-bs-toggle="dropdown" aria-expanded="true">
                            <img src={pro_img} width="40px" alt="img" />
                            <span className="ms-3">Surya</span>
                        </Link>
                        <ul className="dropdown-menu show" data-bs-popper="static">
                            <li>
                                <div className="sp_client_name">
                                    <div>
                                        <img src={pro_img} width="50px" alt="" />
                                    </div>
                                    <div>
                                        <h6>Surya</h6>
                                        <p>Househusband</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/dashboard">
                                    <img src="assets/images/settings.svg" className="me-2" alt="" />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/profile">
                                    <img src="assets/images/settings.svg" className="me-2" alt="" />
                                    Profile Settings
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/loginpage">
                                    <img src="assets/images/sign out.svg" className="me-2" alt="" />
                                    Sign Out
                                </Link>
                            </li>
                            <div className="sp_drop_icon">
                                <i className="bi bi-caret-up-fill"></i>
                            </div>
                        </ul>
                    </div>
                ) : (
                    <div className="dropdown">
                        <Link to="/loginpage" className="sp_outline-btn" style={{textDecoration:'none'}}>
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Demo;
