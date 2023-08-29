import React from 'react';
import pro_img from '../../Assets/images/profile-upload-img.svg';
import { Link } from 'react-router-dom';

const Demo = () => {

  return (
    <div>
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
    </div>
  )
}

export default Demo;