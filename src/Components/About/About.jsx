import React from 'react';
import './About.css';
import svg_1 from '../../Assets/images/svg/Document.svg';
import svg_2 from '../../Assets/images/svg/member.png';
import svg_3 from '../../Assets/images/svg/ragistration.svg';
import svg_4 from '../../Assets/images/svg/communication.svg';
import svg_5 from '../../Assets/images/svg/wallet.svg';
import svg_6 from '../../Assets/images/svg/payment.svg';
import svg_7 from '../../Assets/images/svg/transaction-icon.png';
import svg_8 from '../../Assets/images/svg/unvelling-gift-icon.png';

const About = () => {
    return (
       <>
            <div className='row'>
                <h2>How Takabam Works?</h2>
            </div>
            <div className="sp_works_inner">
          <ul>
            <li className="">
              <div className="sp_work_boxes">
                <p
                  className="sp_wrok_numb aos-init aos-animate"
                  data-aos="flip-left"
                >
                  01
                </p>
                <div>
                  <img
                    src={svg_1}
                    alt=""
                  />
                  <h6>Registration</h6>
                  <p>Enter your takbam website</p>
                </div>
              </div>
              <div className="sp_connect_arrow">
                <img
                  src="https://instagift.mactosys.com/public/assets/images/Group 1.svg"
                  alt=""
                />
              </div>
            </li>
            <li className="">
              <div className="sp_work_boxes">
                <p
                  className="sp_wrok_numb aos-init aos-animate"
                  data-aos="flip-left"
                >
                  02
                </p>
                <div>
                  <img
                    src={svg_2}
                    alt=""
                  />
                  <h6>Become member</h6>
                  <p>Enlist and become a member</p>
                </div>
              </div>
              <div className="sp_connect_arrow2">
                <img
                  src="https://instagift.mactosys.com/public/assets/images/Group 2.svg"
                  alt=""
                />
              </div>
            </li>
            <li className="">
              <div className="sp_work_boxes">
                <p
                  className="sp_wrok_numb aos-init aos-animate"
                  data-aos="flip-left"
                >
                  03
                </p>
                <div>
                  <img
                    src={svg_3}
                    alt=""
                  />
                  <h6>Information Submission</h6>
                  <p>You as a takabam member then fill in the the NAME, SURNAME, tel number, adress, identilty card number and optionally provide a recent photo of your loved one</p>
                </div>
              </div>
              <div className="sp_connect_arrow">
                <img
                  src="https://instagift.mactosys.com/public/assets/images/Group 1.svg"
                  alt=""
                />
              </div>
            </li>
            <li className="">
              <div className="sp_work_boxes">
                <p
                  className="sp_wrok_numb aos-init aos-animate"
                  data-aos="flip-left"
                >
                  04
                </p>
                <div>
                  <img
                    src={svg_4}
                    alt=""
                  />
                  <h6>Google Map Locator</h6>
                  <p>With our GOOGLE MAPS locator you the member pinpoints THE EXACT SHOP that your loved one will go to buy a service or product, adding also the day and time your loved one will appear on the shop/locatione.</p>
                </div>
              </div>
              <div className="sp_connect_arrow">
                <img
                  src="https://instagift.mactosys.com/public/assets/images/Group 1.svg"
                  alt=""
                />
              </div>
            </li>
            <li className="">
              <div className="sp_work_boxes">
                <p
                  className="sp_wrok_numb aos-init aos-animate"
                  data-aos="flip-left"
                >
                  05
                </p>
                <div>
                  <img
                    src={svg_5}
                    alt=""
                  />
                  <h6>Digital Wallet Setup</h6>
                  <p>Takabam will provide you with a digital wallet, so you can transfer the amount of money needed to pay for this service/item that your loved one will purchase.</p>
                </div>
              </div>
              <div className="sp_connect_arrow">
                <img
                  src="https://instagift.mactosys.com/public/assets/images/Group 1.svg"
                  alt=""
                />
              </div>
            </li>
            <li className="">
              <div className="sp_work_boxes">
                <p
                  className="sp_wrok_numb aos-init aos-animate"
                  data-aos="flip-left"
                >
                  06
                </p>
                <div>
                  <img
                    src={svg_6}
                    alt=""
                  />
                  <h6>Secret Payment</h6>
                  <p>When all data is given by you as a member then it is the time of our takabam team to finish the work. The team has to establish a communication connection with the shop/location and inform them that you, our member, will pay secretly for his loved one the amount</p>
                </div>
              </div>
              <div className="sp_connect_arrow">
                <img
                  src="https://instagift.mactosys.com/public/assets/images/Group 1.svg"
                  alt=""
                />
              </div>
            </li>
            <li className="">
              <div className="sp_work_boxes">
                <p
                  className="sp_wrok_numb aos-init aos-animate"
                  data-aos="flip-left"
                >
                  07
                </p>
                <div>
                  <img
                    src={svg_7}
                    alt=""
                  />
                  <h6>Seamless Transactions</h6>
                  <p>The shop agrees then the takabam team is ready, when the loved one buys the service/item the takabam team sends the exact amount, and takabam keeps a percentage plus a one time per action, fee.</p>
                </div>
              </div>
              <div className="sp_connect_arrow">
                <img
                  src="https://instagift.mactosys.com/public/assets/images/Group 1.svg"
                  alt=""
                />
              </div>
            </li>
            <li className="">
              <div className="sp_work_boxes">
                <p
                  className="sp_wrok_numb aos-init aos-animate"
                  data-aos="flip-left"
                >
                  08
                </p>
                <div>
                  <img
                    src={svg_8}
                    alt=""
                  />
                  <h6>Unveiling the Hidden Gift</h6>
                  <p>Our members loved one will be in such a joy when they inform him/her that what he/she bought or consumed is already been paid from our member as a secret gift!!</p>
                </div>
              </div>
              <div className="sp_connect_arrow">
                <img
                  src="https://instagift.mactosys.com/public/assets/images/Group 1.svg"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
        </>
    )
}

export default About;