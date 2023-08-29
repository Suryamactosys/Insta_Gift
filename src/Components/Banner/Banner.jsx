import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import celebration_holiday_present from '../../Assets/images/celebration-holiday-present.jpg';

const Banner = () => {
  return (
    <>
      <img src={celebration_holiday_present} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>Surprise Your Loved <br /> Ones Secretly</h1>
        <p>Surprise your loved one by secretly paying for a <br /> service or item on-site, revealed when they request to<br /> pay.</p>
        <Link to="/loginpage"><button className="btn btn-danger" type="submit">Book Surprise Now</button></Link>
      </div>
    </>
  
  )
}

export default Banner;