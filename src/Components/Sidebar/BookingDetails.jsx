import React from 'react';
import './BookingDetails.css';

const BookingDetails = () => {
  return (
    <div className='container'>
      <div className="sp_dashboard_tabs sp_margin">
        <div id="v-pills-booking" role="tabpanel" aria-labelledby="v-pills-booking-tab">
          <div className="card sp_dashboard_box" style={{ height: '400px' }}>
            <div className="card-header">
              <h5 className="mb-0">Booking Details </h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">Country</label>
                      <input type="text" name="time"  placeholder="India" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">Full Address</label>
                      <input type="text" name="time"  placeholder="22 shop number LIG Square indore" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">City</label>
                      <input type="text" name="time"  placeholder="Indore" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">State</label>
                      <input type="text" name="time"  placeholder="Madhyapradesh" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">Zip Code</label>
                      <input type="text" name="time"  placeholder="453002" className="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails;