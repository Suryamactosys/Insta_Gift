import React from 'react';
import './Content.css';
import customer from '../../Assets/images/Contentimg/customer.png';
import packing from '../../Assets/images/Contentimg/packing.png';
import handshak from '../../Assets/images/Contentimg/handshake.png';
const Content = () => {
    return (
        <div style={{display:'block'}}>
            <div className="row gy-4 ps-sm-0 ps-md-5 ">
                <h2 style={{paddingTop:'20px'}}>Why Choose Us</h2>
                <div className="col-sm-4">
                    <div className="sp_choose_box sp_choose_box_shadwo d-flex">
                        <div className="box_inner">
                            <div className="sp_choose_icon">
                                <img src={customer} width="34px" alt="" /></div>
                            <div className="text-center">
                                <h2 className="counter" data-target="12000">12000</h2>
                                <h5>Customers</h5>
                            </div>
                        </div>
                        <div className="overlay">
                            <h5 className="text-white">Customers</h5>
                            <p className="text-white">We believe in building lasting relationships with our valued customers.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 justify-content-center">
                    <div className="sp_choose_box sp_choose_box_shadwo d-flex">
                        <div className="box_inner">
                            <div className="sp_choose_icon"><img src={packing} width="34px" alt="" /></div>
                            <div className="text-center">
                                <h2 className="counter" data-target="32000">32000</h2>
                                <h5>Orders</h5>
                            </div>
                        </div>
                        <div className="overlay">
                            <h5 className="text-white">Orders</h5>
                            <p className="text-white">Order with confidence, knowing we prioritize your satisfaction.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="sp_choose_box sp_choose_box_shadwo d-flex">
                        <div className="box_inner">
                            <div className="sp_choose_icon"><img src={handshak} width="34px" alt="" /></div>
                            <div className="text-center">
                                <h2 className="counter" data-target="4000">4000</h2>
                                <h5>Partners</h5>
                            </div>
                        </div>
                        <div className="overlay">
                            <h5 className="text-white">Partners</h5>
                            <p className="text-white">Our partnership is the key to unlocking greater opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;