import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import celebration_holiday_present from '../../Assets/images/banner-takabam.png';

const Banner = () => {
  return (
    <>
      <div className='banner-images'>
        <img className='' src={celebration_holiday_present} alt="Banner" />
      </div>
      <div className="banner-content">
        <h1>Surprise Your Loved <br /> Ones Secretly</h1>
        <p>Surprise your loved one by secretly paying for a <br /> service or item on-site, revealed when they request to<br /> pay.</p>
        <Link to="/loginpage"><button className="btn btn-danger" type="submit" style={{ height: '50px' }}>Book Surprise Now</button></Link>
      </div>
    </>

  )
}

export default Banner;
