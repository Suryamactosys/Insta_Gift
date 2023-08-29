import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="container">
            <div className="sp_dashboard_tabs sp_margin">
                <div className="row">
                    <div>
                        <div className="nav flex-column nav-pills">
                            <ul>
                                <li className="nav-link active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true"><i className="bi bi-sliders me-3"></i>
                                    <Link to='main'>Dashboard</Link></li>
                                <li className="nav-link" id="v-pills-order-tab" data-bs-toggle="pill" data-bs-target="#v-pills-order" role="tab" aria-controls="v-pills-order" aria-selected="false" tabIndex="-1"><i className="bi bi-cart-check me-3"></i>
                                    <Link to='order'>Order</Link></li>
                                <li className="nav-link" id="v-pills-wallet-tab" data-bs-toggle="pill" data-bs-target="#v-pills-wallet" role="tab" aria-controls="v-pills-wallet" aria-selected="false" tabIndex="-1"><i className="bi bi-wallet me-3"></i>
                                    <Link to='wallet'>Wallet</Link></li>
                                <li className="nav-link" id="v-pills-booking-tab" data-bs-toggle="pill" data-bs-target="#v-pills-booking" role="tab" aria-controls="v-pills-booking" aria-selected="false" tabIndex="-1"><i className="bi bi-shop-window me-3"></i>
                                    <Link to='bookingdetails'>Booking Details</Link></li>
                                <li className="nav-link" id="v-pills-address-tab" data-bs-toggle="pill" data-bs-target="#v-pills-address" role="tab" aria-controls="v-pills-address" aria-selected="false" tabIndex="-1"><i className="bi bi-gear me-3"></i>
                                    <Link to='profile'>Profile</Link></li>
                                <li className="nav-link" id="v-pills-logout-tab" data-bs-toggle="pill" data-bs-target="#v-pills-logout" role="tab" aria-controls="v-pills-logout" aria-selected="false" tabIndex="-1"><i className="bi bi-box-arrow-right me-3"></i>
                                    <Link to="/loginpage">Log out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;