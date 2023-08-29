import React from 'react';
import './Registrationpage.css';
import logingift from '../../Assets/images/loginimg/suprising-gift-icon.svg';
import { useState } from 'react';
// import axios from 'axios';
// import { _apiURLUser } from '../../Utils/apiURL';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

const REGISTER_URL = '/register';

const Registrationpage = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [new_password, setNew_password] = useState();
    const [confirm_password, setConfirm_password] = useState();
    const [registrationStatus, setRegistrationStatus] = useState('');

  
    const handleSubmit = async (event) => {
      event.preventDefault();
      var userDetails = { "name": name, "email": email, "mobile": mobile, "new_password": new_password, "confirm_password": confirm_password };
      axios.post(REGISTER_URL, userDetails).then((response) => {
        console.log(response);
        if (response.data.status)
        setRegistrationStatus("User register successfully");
        else
        setRegistrationStatus("User registration failed");
        setName('');
        setEmail('');
        setMobile('');
        setConfirm_password('');
        setNew_password('');
      });
    }


    return (
        <div style={{ paddingTop: '20px' }}>
            <div className="sp_login_inner">
                <div className="sp_login_lt">
                    <div className="sp_login_title">
                        <h2><img src={logingift} alt="" />InstaGift</h2>
                        <p>Find the perfect gift that will make
                            your loved ones jump with joy</p>
                    </div>
                    {/* <font style={{ "color": "blue" }}>{output}</font> */}
                    <p style={{ "color": "blue" }}>{registrationStatus}</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <div className="sp_form_field">
                                <input type="text" className="form-control" placeholder="Username" value={name} onChange={e => setName(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="sp_form_field">
                                <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="sp_form_field">
                                <input type="text" className="form-control" placeholder="Mobile Number" value={mobile} onChange={e => setMobile(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <div className="sp_form_field">
                                <div className="sp_form_field">
                                    <input type="password" className="form-control" placeholder="new_password" value={new_password} autoComplete="off" onChange={e => setNew_password(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <div className="sp_form_field">
                                <div className="sp_form_field">
                                    <input type="password" className="form-control " placeholder="confirm_password" value={confirm_password} autoComplete="off" onChange={e => setConfirm_password(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-danger w-100">Submit</button>
                        </div>
                    </form>
                    <div className="sp_signup_text">
                        <p>Already have an account?<Link to="/loginpage">Login</Link></p>
                    </div>
                    <p className="sp_copyright_login">Copyright © 2023 <span>Name</span> . All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
export default Registrationpage;