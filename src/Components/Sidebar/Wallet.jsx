import React from 'react';
import { Link } from 'react-router-dom';

const Wallet = () => {
  return (
    <div className='container'>
      <div className="sp_dashboard_tabs sp_margin">
        <div id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
          <div className="card sp_dashboard_box" style={{ height: '400px' }}>
            <div className="card-header">
              <h5 className="mb-0">Wallet </h5>
            </div>
            <div className="card-body">
              <div className="text-end d-flex justify-content-end align-items-center">
                <Link to="#" className="sp_btn mb-3" data-bs-toggle="modal" data-bs-target="#walletModal">Recharge</Link>
              </div>
              <div className="table-responsive">
                <div id="wallet_wrapper" className="dataTables_wrapper no-footer">
                  <div id="wallet_filter" className="dataTables_filter"><label>Search:<input type="search" className="" placeholder="" aria-controls="wallet" /></label>
                  </div>
                  <table className="table dataTable no-footer" id="wallet" role="grid" aria-describedby="wallet_info">
                    <thead>
                      <tr role="row">
                        <th className="sorting_desc" tabIndex="0" aria-controls="wallet" rowSpan="1" colSpan="1" aria-sort="descending" aria-label="ID: activate to sort column ascending" style={{ width: '0px' }}>ID</th>
                        <th className="sorting" tabIndex="0" aria-controls="wallet" rowSpan="1" colSpan="1" aria-label="Date: activate to sort column ascending" style={{ width: '0px' }}>Date</th>
                        <th className="sorting" tabIndex="0" aria-controls="wallet" rowSpan="1" colSpan="1" aria-label="Shop Name: activate to sort column ascending" style={{ width: '0px' }}>Shop Name</th>
                        <th className="sorting" tabIndex="0" aria-controls="wallet" rowSpan="1" colSpan="1" aria-label="Address: activate to sort column ascending" style={{ width: '0px' }}>Address</th>
                        <th className="sorting" tabIndex="0" aria-controls="wallet" rowSpan="1" colSpan="1" aria-label="Account: activate to sort column ascending" style={{ width: '0px' }}>Account</th>
                        <th className="sorting" tabIndex="0" aria-controls="wallet" rowSpan="1" colSpan="1" aria-label="Amount: activate to sort column ascending" style={{ width: '0px' }}>Amount</th></tr>
                    </thead>
                    <tbody>
                      <tr className="odd">
                        <td valign="top" colSpan="6" className="dataTables_empty">Loading...</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="dataTables_info" id="wallet_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                  <div className="dataTables_paginate paging_simple_numbers" id="wallet_paginate">
                    <Link className="paginate_button previous disabled" aria-controls="wallet" data-dt-idx="0" tabIndex="0" id="wallet_previous">Previous</Link><span></span>
                    <Link className="paginate_button next disabled" aria-controls="wallet" data-dt-idx="1" tabIndex="0" id="wallet_next">Next</Link>
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

export default Wallet;