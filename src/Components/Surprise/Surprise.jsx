import React from 'react';
import bnner_image_2 from '../../Assets/images/bnner-image-2.jpg';
import './Surprise.css';

const Surprise = () => {
    return (
        <div className="row">
            <div className="col-md 5">
                <img className="img" src={bnner_image_2} alt="img" style={{ height: '380px', width: '380px' }} />
            </div>
            <div className="col-md-6">
                <div className='sp_title_center'>
                    <h4 style={{ fontWeight: '600', fontSize: '30px' }}>Give A Secret Special <span style={{ color: 'red' }}>Surprise</span> For The Person You Love (Even If They Are In The Other End Of The World)</h4>
                    <h5 style={{ fontWeight: '600' }}>For all the occasions you can imagine!</h5>
                </div>
                <ul className='sp_surprise_wrapper li' style={{ textAlign: 'center' }}>
                    <li>Friends bachelor party</li>
                    <li>Wedding arrangements</li>
                    <li>Anniversaries and baby showers</li>
                    <li>Your childs birthday, (pay secretly for his dinner or clubing with
                        friends)</li>
                    <li>Your girlfriend shopping for jewelry</li>
                    <li>your parents dinning out</li>
                    <li>your best friend shopping</li>
                    <li>car buying for your wife or child</li>
                    <li>rent for your child abroad</li>
                    <li>vacations for your loved ones</li>
                    <li>supermarket expences for your loved ones and anything that you can</li>
                    <li>concerts etc</li>
                </ul>
            </div>
        </div>
    )
}

export default Surprise;