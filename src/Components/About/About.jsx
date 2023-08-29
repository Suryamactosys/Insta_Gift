import React from 'react';
import './About.css';

const About = () => {
    return (
       <>
            <div className='row'>
                <h2>How Does Takabam Works?</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col" style={{paddingTop:'10px'}}>
                    <div className="card h-100">
                        <div className="card card-body">
                            <span className='font'><i className="bi bi-file-earmark-text"></i>01</span>
                            <h5 className="card-title">Registration</h5>
                            <p className="card-text">Enter your takbam website</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{paddingTop:'10px'}}>
                    <div className="card h-100">
                        <div className="card card-body">
                            <span className='font'><i className="bi bi-person-add"></i>02</span>
                            <h5 className="card-title">Become Member</h5>
                            <p className="card-text">Enlist and become a member</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{paddingTop:'10px'}}>
                    <div className="card h-100">
                        <div className="card card-body">
                            <span className='font'><i className="bi bi-info-circle"></i>03</span>
                            <h5 className="card-title">Information Submission</h5>
                            <p className="card-text">You as a takabam member then fill in the the NAME, SURNAME, tel number, adress, identilty card number and optionally provide a recent photo of your loved one</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{paddingTop:'10px'}}>
                    <div className="card h-100">
                        <div className="card card-body">
                            <span className='font'><i className="bi bi-geo-alt"></i>04</span>
                            <h5 className="card-title">Google Map Locator</h5>
                            <p className="card-text">With our GOOGLE MAPS locator you the member pinpoints THE EXACT SHOP that your loved one will go to buy a service or product, adding also the day and time your loved one will appear on the shop/locatione.</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{paddingTop:'10px'}}>
                    <div className="card h-100">
                        <div className="card card-body">
                            <span className='font'><i className="bi bi-wallet2"></i>05</span>
                            <h5 className="card-title">Digital Wallet Setup</h5>
                            <p className="card-text">Takabam will provide you with a digital wallet, so you can transfer the amount of money needed to pay for this service/item that your loved one will purchase.</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{paddingTop:'10px'}}>
                    <div className="card h-100">
                        <div className="card card-body">
                            <span className='font'><i className="bi bi-wallet2"></i>06</span>
                            <h5 className="card-title">Secret Payment</h5>
                            <p className="card-text">When all data is given by you as a member then it is the time of our takabam team to finish the work. The team has to establish a communication connection with the shop/location and inform them that you, our member, will pay secretly for his loved one the amount</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{paddingTop:'10px'}}>
                    <div className="card h-100">
                        <div className="card card-body">
                            <span className='font'><i className="bi bi-info-circle"></i>07</span>
                            <h5 className="card-title">Seamless Transactions</h5>
                            <p className="card-text">The shop agrees then the takabam team is ready, when the loved one buys the service/item the takabam team sends the exact amount, and takabam keeps a percentage plus a one time per action, fee.</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{paddingTop:'10px'}}>
                    <div className="card h-100">
                        <div className="card card-body">
                            <span className='font'><i className="bi bi-geo-alt"></i>08</span>
                            <h5 className="card-title">Unveiling the Hidden Gift</h5>
                            <p className="card-text">Our members loved one will be in such a joy when they inform him/her that what he/she bought or consumed is already been paid from our member as a secret gift!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;