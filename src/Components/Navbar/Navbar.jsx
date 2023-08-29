import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.svg';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg position-fixed">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/shoppage">SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/specialpage">SPECIAL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/contactus">CONTACT US</Link>
                            </li>
                        </ul>
                        <Link className="nav-link active" to="/loginpage"><button className="btn btn-danger" style={{ background: '#F05E68' }} type="submit">Login</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;