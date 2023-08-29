import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container'>
            <div className="sp_dashboard_tabs sp_margin">
                <div className="col-sm-12">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                            <div className="row">
                                <div className='col-sm-12'>
                                    <div className="card sp_dashboard_box" style={{ height: '500px' }}>
                                        <div className="card-header">
                                            <h5 className="mb-0">Dashboard </h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="btn-group mr-2" role="group" aria-label="First group">
                                                        <button type="button" className="btn btn-light dbtn"><i className="bi bi-clock"></i> Pending  <span id="Pcount">0</span></button>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                                                        <button type="button" className="btn btn-light dbtn"><i className="bi bi-check-circle"></i> Approved  <span id="Acount">0</span></button>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="btn-group" role="group" aria-label="Third group">
                                                        <button type="button" className="btn btn-light dbtn" id="get-wallet"><i className="bi bi-wallet"></i> Wallet <i className="bi bi-currency-dollar"></i><span id="Wcount">0</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="card sp_dashboard_box">
                                                        <div className="card-header">
                                                            <h5 className="mb-0">Latest Booking </h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="table-responsive">
                                                                <div id="latest_wrapper" className="dataTables_wrapper no-footer">
                                                                    <div id="latest_filter" className="dataTables_filter"><label>Search:<input type="search" className="" placeholder="" aria-controls="latest" /></label></div>
                                                                    <table className="table dataTable no-footer" id="latest" role="grid" aria-describedby="latest_info" style={{ width: '763px' }}>
                                                                        <thead>
                                                                            <tr role="row">
                                                                                <th className="sorting_desc" tabIndex="0" aria-controls="latest" rowSpan="1" colSpan="1" aria-label="Order: activate to sort column ascending" aria-sort="descending" style={{ width: '98.8906px' }}>Order</th>
                                                                                <th className="sorting" tabIndex="0" aria-controls="latest" rowSpan="1" colSpan="1" aria-label="Date: activate to sort column ascending" style={{ width: '85.7969px' }}>Date</th>
                                                                                <th className="sorting" tabIndex="0" aria-controls="latest" rowSpan="1" colSpan="1" aria-label="Time: activate to sort column ascending" style={{ width: '88.7969px' }}>Time</th>
                                                                                <th className="sorting" tabIndex="0" aria-controls="latest" rowSpan="1" colSpan="1" aria-label="Address: activate to sort column ascending" style={{ width: '134.359px' }}>Address</th>
                                                                                <th className="sorting" tabIndex="0" aria-controls="latest" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending" style={{ width: '108.984px' }}>Status</th>
                                                                                <th className="sorting" tabIndex="0" aria-controls="latest" rowSpan="1" colSpan="1" aria-label="Actions: activate to sort column ascending" style={{ width: '124.172px' }}>Actions</th></tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr className="odd">
                                                                                <td valign="top" colSpan="6" className="dataTables_empty">No data available in table</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="dataTables_info" id="latest_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                                                                    <div className="dataTables_paginate paging_simple_numbers" id="latest_paginate">
                                                                        <Link className="paginate_button previous disabled" aria-controls="latest" data-dt-idx="0" tabIndex="0" id="latest_previous">Previous</Link>
                                                                        <span></span><Link className="paginate_button next disabled" aria-controls="latest" data-dt-idx="1" tabIndex="0" id="latest_next">Next</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;