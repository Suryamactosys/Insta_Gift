import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div className='container'>
            <div className="sp_dashboard_tabs sp_margin">
                {/* className="tab-pane fade" */}
                <div id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
                    <div className="card sp_dashboard_box" style={{height:'400px'}}>
                        <div className="card-header">
                            <h5 className="mb-0">Your Orders </h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="orders_wrapper" className="dataTables_wrapper no-footer">
                                    <div id="orders_filter" className="dataTables_filter"><label>Search:<input type="search" className="" placeholder="" aria-controls="orders" /></label></div>
                                    <table className="table dataTable no-footer" id="orders" role="grid" aria-describedby="orders_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_desc" tabIndex="0" aria-controls="orders" rowSpan="1" colSpan="1" aria-label="Order: activate to sort column ascending" aria-sort="descending" style={{ width: '0px' }}>Order</th>
                                                <th className="sorting" tabIndex="0" aria-controls="orders" rowSpan="1" colSpan="1" aria-label="Date: activate to sort column ascending" style={{ width: '0px' }}>Date</th>
                                                <th className="sorting" tabIndex="0" aria-controls="orders" rowSpan="1" colSpan="1" aria-label="Time: activate to sort column ascending" style={{ width: '0px' }}>Time</th>
                                                <th className="sorting" tabIndex="0" aria-controls="orders" rowSpan="1" colSpan="1" aria-label="Address: activate to sort column ascending" style={{ width: '0px' }}>Address</th>
                                                <th className="sorting" tabIndex="0" aria-controls="orders" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending" style={{ width: '0px' }}>Status</th>
                                                <th className="sorting" tabIndex="0" aria-controls="orders" rowSpan="1" colSpan="1" aria-label="Actions: activate to sort column ascending" style={{ width: '0px' }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="odd">
                                        <td valign="top" colSpan="6" className="dataTables_empty">No data available in table</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" id="orders_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="orders_paginate">
                                        <Link className="paginate_button previous disabled" aria-controls="orders" data-dt-idx="0" tabIndex="0" id="orders_previous">Previous</Link>
                                        <span></span><Link className="paginate_button next disabled" aria-controls="orders" data-dt-idx="1" tabIndex="0" id="orders_next">Next</Link>
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

export default Order;