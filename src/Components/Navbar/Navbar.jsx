import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/logo.svg';
import AuthContext from '../../context/AuthProvider';

const Navbar = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/loginpage');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg position-fixed">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/shop">SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/specialpage">SPECIAL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/contactus">CONTACT US</Link>
                            </li>
                        </ul>
                        {isAuthenticated ? (
                            <button className="btn btn-danger" style={{ background: '#F05E68' }} onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link className="nav-link active" to="/loginpage">
                                <button className="btn btn-danger" style={{ background: '#F05E68' }} type="submit">Login</button>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
