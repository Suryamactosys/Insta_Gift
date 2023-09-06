import React from 'react';
import './Content.css';
import customer from '../../Assets/images/Contentimg/customer.png';
import packing from '../../Assets/images/Contentimg/packing.png';
import handshak from '../../Assets/images/Contentimg/handshake.png';
const Content = () => {
    return (
        <div className="sp_choose_div">
      {/* <div
        className="sp_margin container aos-init"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="900"
        data-aos-delay="300"
        data-aos-offset="0"
      > */}
        <h1 className="sp_title_center">Why Choose Takabam</h1>
        {/* Uncomment the following line if you want to add a subcontent */}
        {/* <p className="sp_subcontent">Lorem ipsum dolor sit amet consectetur. Morbi.</p> */}
        <div className="row mt-5">
          <div className="col-sm-12">
            <div className="row gy-4 ps-sm-0 ps-md-5 ">
              <div className="col-sm-4">
                <div className="sp_choose_box sp_choose_box_shadwo d-flex">
                  <div className="sp_choose_box_inner">
                    <div className="sp_choose_icon">
                      <img
                        src={customer}
                        width="34px"
                        alt="image"
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="counter" data-target="12000">
                        12000
                      </h2>
                      <h5>Member</h5>
                    </div>
                  </div>
                  <div className="sp_choose_box_overlay">
                    <h5 className="text-white">Our Member</h5>
                    <p className="text-white">
                      We respect our member desires, and we realize their
                      surprise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 justify-content-center">
                <div className="sp_choose_box sp_choose_box_shadwo d-flex">
                  <div className="sp_choose_box_inner">
                    <div className="sp_choose_icon">
                      <img
                        src={packing}
                        width="34px"
                        alt="image"
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="counter" data-target="32000">
                        32000
                      </h2>
                      <h5>Secret Surprise</h5>
                    </div>
                  </div>
                  <div className="sp_choose_box_overlay">
                    <h5 className="text-white">Secret Surprise</h5>
                    <p className="text-white">
                      Our Takabam team has the knowledge and ability to fulfill
                      every secret surprise gift.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="sp_choose_box sp_choose_box_shadwo d-flex">
                  <div className="sp_choose_box_inner">
                    <div className="sp_choose_icon">
                      <img
                        src={handshak}
                        width="34px"
                        alt="image"
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="counter" data-target="4000">
                        4000
                      </h2>
                      <h5>Business & Shops</h5>
                    </div>
                  </div>
                  <div className="sp_choose_box_overlay">
                    <h5 className="text-white">Business and Shops</h5>
                    <p className="text-white">
                      They are more than happy to be able to be part of a very
                      surprising moment and see the joy on the faces of their
                      customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
    )
}

export default Content;