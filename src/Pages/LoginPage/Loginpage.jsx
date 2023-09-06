// import Cookies from 'js-cookie';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import logingift from '../../Assets/images/loginimg/suprising-gift-icon.svg';

const LOGIN_URL = '/user-login';

const LoginPage = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleLoginError = (err) => {
    if (!err?.response) {
      setErrMsg('No Server Response');
    } else if (err.response?.status === 400) {
      setErrMsg('Missing Username or Password');
    } else if (err.response?.status === 401) {
      setErrMsg('Unauthorized');
    } else {
      setErrMsg('Login Failed');
    }
    errRef.current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, password, roles, accessToken });
      setEmail('');
      setPassword('');
      navigate(from, { replace: true });
    } catch (err) {
      handleLoginError(err);
    }
  };

  return (
    <div className="sp_login_inner">
      <div className="sp_login_lt">
        <div>
          <div className="sp_login_title">
            <h2>
              <img src={logingift} alt="" />Suprise them
            </h2>
            <p>
              Secretly pay for something that your loved one wants to buy and
              surprise him or her, make them jump with joy
            </p>
          </div>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              required
            />
            <br />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
              required
            />
            <br />
            <div className="sp_forget_text">
              <p>
                <Link to="#">Forgot Password?</Link>
              </p>
            </div>
            <div className=" ">
              <button type="submit" className="btn btn-danger w-100">
                Sign In
              </button>
            </div>
            <div className="sp_signup_text">
              <p>
                New to Company name?
                <Link to="/registrationpage">Sign Up!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// useEffect(() => {
//     const accessToken = Cookies.get('access_token');
//     const refreshToken = Cookies.get('refresh_token');

//     axios.get(LOGIN_URL, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//   }, []);  

// useEffect(() => {
//     const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYW1hbkBnbWFpbC5jb20iLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE2OTM2MzQ3NTEsImV4cCI6MTY5MzYzNTY1MX0.0s-SijmOyTmpBBAKxtLfnjT1DNNWOxMuMJtZOfdENCc';
//     const refreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTM2MzQ3NTEsImV4cCI6MTY5NDIzOTU1MX0.HTWEHOp40QEmgjn5vtPPrIQ-MSVilC5fVA-ciMkcyV0';
//     Cookies.set('access_token', accessToken, { expires: 1 });
//     Cookies.set('refresh_token', refreshToken, { expires: 7 });
//   }, []);