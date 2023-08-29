import React from 'react';
import './SpecialDay.css';
import { Link } from 'react-router-dom';

const Specialday = () => {
  return (
    <div className="banner-contents" style={{textAlign:"center"}}>
      <h1>SPECIAL DAY</h1>
      <p>Even if you are far away from them make them feel that you are  near that you are close to them</p>
      <Link to="/"><button className="btn btn-danger" type="submit">Book Now</button></Link>
    </div>
  )
}

export default Specialday;