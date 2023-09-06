import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import gallery_1 from '../../Assets/images/slidergallery/gallery1.jpg';
import gallery_2 from '../../Assets/images/slidergallery/gallery2.jpg';
import gallery_3 from '../../Assets/images/slidergallery/gallery3.jpg';
import gallery_4 from '../../Assets/images/slidergallery/gallery4.jpg';
import gallery_5 from '../../Assets/images/slidergallery/gallery5.png';
import gallery_6 from '../../Assets/images/slidergallery/gallery6.jpg';
import gallery_7 from '../../Assets/images/slidergallery/gallery7.png';
import gallery_8 from '../../Assets/images/slidergallery/gallery8.png';
import gallery_9 from '../../Assets/images/slidergallery/gallery9.png';
import gallery_10 from '../../Assets/images/slidergallery/gallery10.png';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#F2F5F5', padding: '40px' }}>
      <div>
        <h1>Takabam Moments</h1>
        <p>Make you loved ones happy all over the world .<br />
          Paying for a service or item they are about to purchase themselve.</p>
      </div>
      <Slider {...settings}>
        <div>
          <img src={gallery_1} alt="" style={{ height: '350px' }} />
        </div>
        <div>
          <img src={gallery_2} alt="" style={{ height: '350px' }} />
        </div>
        <div>
          <img src={gallery_3} alt="" style={{ height: '350px' }} />
        </div>
        <div>
          <img src={gallery_4} alt="" style={{ height: '350px' }} />
        </div>
        <div>
          <img src={gallery_5} alt="" style={{ height: '350px' }} />
        </div>
        <div>
          <img src={gallery_6} alt="" style={{ height: '350px' }} />
        </div>
        <div>
          <img src={gallery_7} alt="" style={{ height: '350px' }} />
        </div>
        <div>
          <img src={gallery_8} alt="" style={{ height: '350px' }} />
        </div>
        <div>
          <img src={gallery_9} alt="" style={{ height: '350px' }} />
        </div>
        <div>
          <img src={gallery_10} alt="" style={{ height: '350px' }} />
        </div>
      </Slider>
    </div>
  );
};


export default Gallery;