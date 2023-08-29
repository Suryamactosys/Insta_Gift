import React from 'react';
import { Link } from 'react-router-dom';
import sales_gif from '../../Assets/images/sales-gif.gif';
import './Gift.css';

const Gift = () => {
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-md 5">
                        <div className="sp_top_shopes_left">
                        <img className="img" src={sales_gif} alt="img" style={{height:'230px', width:'400px', backgroundColor:'#fff'}} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Want To Send More Special Gift ?</h3>
                        <p>Takabam is the only service for all the people we love and we want to give them a secret gift, when we know where they will go to buy a product or consume a service</p>
                        <Link to="/loginpage"><button type="submit" className="sp-btn">Subscribe Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gift;