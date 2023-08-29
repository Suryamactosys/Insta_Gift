import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import banner01 from '../../Assets/images/slidergallery/banner01.jpg';
import banner02 from '../../Assets/images/slidergallery/banner02.jpg';
import banner03 from '../../Assets/images/slidergallery/banner03.jpg';
import banner04 from '../../Assets/images/slidergallery/banner04.jpg';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div style={{textAlign:'center', backgroundColor:'#F2F5F5', padding:'20px'}}>
    <div>
        <h1>Our Gallery</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu ac sed id<br/>
           interdum tortor. Nisl ipsum dictumst dictum aliquet.</p>
    </div>
      <Slider {...settings}>
      <div>
        <img src={banner01} alt="Image 1" style={{height:'350px'}} />
      </div>
      <div>
        <img src={banner02} alt="Image 2" style={{height:'350px'}} />
      </div>
      <div>
        <img src={banner03} alt="Image 3" style={{height:'350px'}} />
      </div>
      <div>
        <img src={banner04} alt="Image 4" style={{height:'350px'}} />
      </div>
      </Slider>
    </div>
  );
};


export default Gallery;