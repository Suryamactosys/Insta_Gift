import React from 'react';
import Banner from '../Components/Banner/Banner';
import '../Components/Banner/Banner.css';
import About from '../Components/About/About';
import '../Components/About/About.css';
import Gift from '../Components/Gift/Gift';
import '../Components/Gift/Gift.css';
import Gallery from '../Components/Gallery/Gallery';
import Content from '../Components/Content/Content';
import '../Components/Content/Content.css';
import Specialday from '../Components/SpecialDay/Specialday';
import '../Components/SpecialDay/SpecialDay.css';
import Client from '../Components/ClientPage/Client';
import '../Components/ClientPage/Client.css';
import Contact from '../Components/Contact/Contact';
import Surprise from '../Components/Surprise/Surprise';
// import Demo from '../Components/Demo/Demo';
// import Demo from '../Components/Sidebar/Demo';
// import Test from '../Components/Sidebar/Test';

const HomePage = () => {
  return (
    <div>
      <div className="banner-container2">
        <Banner />
      </div>
      <div className="container1">
        <About />
      </div>
      <div className="container" style={{ padding: '100px' }}>
        <Gift />
      </div>
      <div className="container" style={{ paddingTop: '20px', paddingBottom:'20px'}}>
        <Surprise />
      </div>
      <div style={{ textAlign: 'center', backgroundColor: '#F2F5F5', padding: '40px', }}>
        <Content />
      </div>
      <div className="banner-container">
        <Specialday />
      </div>
      <div className='container1'>
        <Client />
      </div>
      <Gallery />
      <div style={{ padding: '50px', background: '#F2F5F5' }}>
        <Contact />
      </div>
      {/* <Test /> */}
      {/* <Demo /> */}
      {/* <Demo/> */}
    </div>
  )
}

export default HomePage;