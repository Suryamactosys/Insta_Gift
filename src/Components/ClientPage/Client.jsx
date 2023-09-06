import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import star from '../../Assets/images/Star.svg';
import client_img from '../../Assets/images/client-img.svg';

const Client = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid">
      <div className="sp_testimonial_wrapper sp_margin aos-init aos-animate" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700" data-aos-delay="300" data-aos-offset="0">
        <div className="text-center mb-2">
          <span className="sp_title_top text-uppercase">Happy clients</span>
        </div>
        <h1 className="sp_title_center">What Our Clients Say</h1>
        <p className="sp_subcontent">
          Lorem ipsum dolor sit amet consectetur. Arcu ac sed id interdum tortor. Nisl ipsum dictumst dictum aliquet.
        </p>
        <div className="row">
          <div className="col-sm-6"></div>
          <div className="col-sm-6 mt-3">
            <div className="sp_seeAll">
              <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-399c2db61ff4111b"></div>
              <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-399c2db61ff4111b"></div>
              <p className="text-end m-0">
                <a href="/">See all</a>
              </p>
            </div>
          </div>
        </div>
        <div style={{padding:'30px'}}>
        <Slider {...settings}>
          <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{ width: '252px', marginRight: '20px' }}>
            <div className="sp_client_box">
              <div className="sp_client_img">
                <img src={client_img} alt="" className="img-fluid" />
              </div>
              <div className="sp_rating mb-2">
                <ul className="list-unstyled">
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
              <p className="sp_client_desc">
                <span className="sp_client_quote">“</span> I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.
                <span className="sp_client_quote2">”</span>
              </p>
              <div className="sp_client-details">
                <h6>Nazmi Javier</h6>
                <p>Househusband</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{ width: '252px', marginRight: '20px' }}>
            <div className="sp_client_box">
              <div className="sp_client_img">
                <img src={client_img} alt="" className="img-fluid" />
              </div>
              <div className="sp_rating mb-2">
                <ul className="list-unstyled">
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
              <p className="sp_client_desc">
                <span className="sp_client_quote">“</span> I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.
                <span className="sp_client_quote2">”</span>
              </p>
              <div className="sp_client-details">
                <h6>Nazmi Javier</h6>
                <p>Househusband</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{ width: '252px', marginRight: '20px' }}>
            <div className="sp_client_box">
              <div className="sp_client_img">
                <img src={client_img} alt="" className="img-fluid" />
              </div>
              <div className="sp_rating mb-2">
                <ul className="list-unstyled">
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
              <p className="sp_client_desc">
                <span className="sp_client_quote">“</span> I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.
                <span className="sp_client_quote2">”</span>
              </p>
              <div className="sp_client-details">
                <h6>Nazmi Javier</h6>
                <p>Househusband</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{ width: '252px', marginRight: '20px' }}>
            <div className="sp_client_box">
              <div className="sp_client_img">
                <img src={client_img} alt="" className="img-fluid" />
              </div>
              <div className="sp_rating mb-2">
                <ul className="list-unstyled">
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
              <p className="sp_client_desc">
                <span className="sp_client_quote">“</span> I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.
                <span className="sp_client_quote2">”</span>
              </p>
              <div className="sp_client-details">
                <h6>Nazmi Javier</h6>
                <p>Househusband</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{ width: '252px', marginRight: '20px' }}>
            <div className="sp_client_box">
              <div className="sp_client_img">
                <img src={client_img} alt="" className="img-fluid" />
              </div>
              <div className="sp_rating mb-2">
                <ul className="list-unstyled">
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
              <p className="sp_client_desc">
                <span className="sp_client_quote">“</span> I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.
                <span className="sp_client_quote2">”</span>
              </p>
              <div className="sp_client-details">
                <h6>Nazmi Javier</h6>
                <p>Househusband</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{ width: '252px', marginRight: '20px' }}>
            <div className="sp_client_box">
              <div className="sp_client_img">
                <img src={client_img} alt="" className="img-fluid" />
              </div>
              <div className="sp_rating mb-2">
                <ul className="list-unstyled">
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
              <p className="sp_client_desc">
                <span className="sp_client_quote">“</span> I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.
                <span className="sp_client_quote2">”</span>
              </p>
              <div className="sp_client-details">
                <h6>Nazmi Javier</h6>
                <p>Househusband</p>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default Client;