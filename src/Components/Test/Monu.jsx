import React from 'react';
import call from '../../Assets/images/svg/call-icon.svg';
import email from '../../Assets/images/svg/email-icon.svg';
import location from '../../Assets/images/svg/location-icon.svg';

const ContactUs = () => {
  return (
    <div className="sp_help_wrapper sp_margin aos-init aos-animate">
      <div className="container">
        <div className="row gy-4">
          <div className="col-sm-6">
            <div className="sp_help_inner_lt">
              <span className="sp_title_top text-uppercase">contact us</span>
              <h1 className="sp_title_center">Let takabam help you</h1>
              <p className="sp_subcontent text-start">Our services help you offer a surprise to your loved ones, secretly without them knowing that you paid for a service or good they are ready to consume or buy. Our skilled takabam professionals go above and beyond on every job, so you can feel happy because you made your loved ones very very happy and joyful.</p>
              <ul>
                <li>
                  <a href="tel:+123-433-123"> <img className="me-2" src={call} alt="image" />+123-433-123</a>
                </li>
                <li><a href="#"><img className="me-2" src={email} alt="image" />hello@Company.com</a></li>
                <li><img className="me-2" src={location} alt="image" />JKT, Indonesia </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="sp_help_inner">
              <form>
                <div className="mb-3">
                  <div className="sp_form_field">
                    <input type="text" className="form-control" placeholder="Full name" name="name" />
                  </div>
                </div>
                <div className="mb-3 mt-3">
                  <div className="sp_form_field">
                    <input type="text" className="form-control" placeholder="E-mail address" name="email" />
                  </div>
                </div>
                <div className="mb-3 mt-3">
                  <div className="sp_form_field">
                    <input type="text" className="form-control" placeholder="Subject" name="location" />
                  </div>
                </div>
                <div className="mb-3 mt-3">
                  <div className="sp_form_field">
                    <textarea name="msg" cols="30" rows="10" placeholder="Write us a message..."></textarea>
                  </div>
                </div>
                <div className=" ">
                  <button type="submit" className="sp_btn w-100">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;