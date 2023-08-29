import React from 'react';
import Hero from '../../Components/Sidebar/Hero';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {


  return (
    <div style={{backgroundColor: '#F2F5F5'}}>
      <div>
        <Hero />
      </div>
      <div className='container' style={{ paddingTop: '30px', paddingBottom:'20px'}}>
        <div className='container' style={{ display: 'flex' }}>
          <aside className='col-md-3'>
            <Sidebar />
          </aside>
          <div className='col-md-9'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;