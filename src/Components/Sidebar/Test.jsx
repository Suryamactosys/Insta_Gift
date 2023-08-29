import React from 'react';
import mail_icon from '../../Assets/images/mail-icon.png';
const Test = () => {
  return (
    <div className="sp_bookingForm_wrapper">
      <div className="container">
        <div className="booking-form">
          <div className="row">
            <h1 className="sp_title_center">Book Your Surprise</h1>
            <span className="form-sub-heading">Thank you for choosing us! Please fill out the form below to book your surprise. <br /> We're excited to serve you and make your experience exceptional.</span>
            <div className="col-md-12">
               {/* https://instagift.mactosys.com/add-booking */}
              <form id="msform" method="POST" action="/add-booking" encType="multipart/form-data">
                <input type="hidden" name="_token" value="lnrmY9Hj5vqn6Bd9uoNdycVEMYIW3ziR9was61iN" />
                <ul id="progressbar">
                  <li className="active">Pick A Shop</li>
                  <li>Booking Details</li>
                  <li>Confirm</li>
                </ul>
                <fieldset data-step="1">
                  <h2 className="fs-title">Pick A Shop</h2>
                  <h3 className="fs-subtitle mb-5">Choose a Shop </h3>
                  <div className="row gy-4">
                    <div className="col-md-10">
                      <div className="sp_form_field">
                        <label htmlFor="">Search Address</label>
                        <input type="text" className="form-control mt-2" name="city" id="front-search-field" placeholder="Enter Address" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="sp_search_btn_wrap">
                        <button type="button" className="sp_btn sp_search_btn" id="search-city">Search</button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="sp_map_wrap" id="map"></div>
                    </div>
                    <div className="col-md-4">
                      <div className="sp_form_field">
                        <label htmlFor="">Country <span className="required-indicator">*</span> </label>
                        <input type="text" className="form-control mt-2 " name="country" id="country" placeholder="Enter Country" required />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="sp_form_field">
                        <label htmlFor="">Shop Name<span className="required-indicator">*</span></label>
                        <input type="text" className="form-control mt-2" name="shop_name" id="shop_name" required placeholder="Enter Shop Name" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="sp_form_field">
                        <label htmlFor="">Full Address <span className="required-indicator">*</span></label>
                        <input type="text" className="form-control mt-2" name="address" id="full_address" required placeholder="Enter Address" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="sp_form_field">
                        <label htmlFor="">Address Line 1 <span className="required-indicator">*</span></label>
                        <input type="text" className="form-control mt-2" required name="address_1" id="address_line" placeholder="Enter Address" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="sp_form_field">
                        <label htmlFor="">City / Town / District <span className="required-indicator">*</span></label>
                        <input type="text" className="form-control mt-2" required name="city" id="city" placeholder="Enter City" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="sp_form_field">
                        <label htmlFor="">State / Province / County / Region <span className="required-indicator">*</span></label>
                        <input type="text" className="form-control mt-2" required name="state" id="state" placeholder="Enter State" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="sp_form_field">
                        <label htmlFor="">ZIP / Postal Code <span className="required-indicator">*</span></label>
                        <input type="text" className="form-control mt-2" required name="zip" id="zip" placeholder="Enter ZIP code" />
                      </div>
                    </div>
                    <div className="sp_pre_next_btn mt-5">
                      <input type="button" name="next" className="next sp_btn" value="Next" />
                    </div>
                  </div>
                </fieldset>
                <fieldset data-step="2" id="booking-details">
                  <h2 className="fs-title">Booking Details</h2>
                  <h3 className="fs-subtitle">Enter Loved one's details</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="sp_form_field">
                        <label htmlFor="">First Name</label>
                        <input type="text" required className="form-control mt-3" name="f_name" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sp_form_field">
                        <label htmlFor="">Last Name</label>
                        <input type="text" required className="form-control mt-3" name="l_name" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="sp_form_field">
                        <label htmlFor="" className="mb-3">Date</label>
                        <input type="date" required name="booking_date"  placeholder="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="sp_form_field">
                        <label htmlFor="" className="mb-3">Time</label>
                        <input type="time" required name="booking_time"  placeholder="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="sp_form_field">
                        <label htmlFor="" className="mb-3">Photo</label>
                        <input type="file" required name="image"  placeholder="" className="form-control" multiple="" id="photos" />
                      </div>
                      <div id="myImg" style={{ float: 'left' }}></div>
                      <i className="fa fa-check-circle yes" style={{ fontSize: '48px', color: 'green', display: 'none', textAlign: 'left' }}></i>
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="sp_form_field">
                        <label htmlFor="" className="mb-3">No. of Persons</label>
                        <input type="number" required name="people"  placeholder="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="sp_form_field">
                        <label htmlFor="" className="mb-3">Identity No.</label>
                        <input type="text" required name="identity"  placeholder="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <div className="sp_form_field">
                        <label htmlFor="" className="mb-3">Description</label>
                        <textarea required name="description" id="" cols="30" rows="10" placeholder="Description of Person"></textarea>
                      </div>

                      <input type="hidden" name="user_id" value="24" />
                      <input type="hidden" name="shop_id"  />
                      <input type="hidden" name="latitude"  id="latitude" />
                      <input type="hidden" name="longitude"  id="longitude" />
                      <input type="hidden" name="store"  id="store" />
                    </div>

                  </div>
                  {/* <h3 className="fs-subtitle"></h3> */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row mt-3 gy-2">
                        <div className="col-md-6">
                          <input type="button" name="previous" className="previous sp_btn_prev" value="Previous" />
                        </div>
                        <div className="col-md-6">
                          <input style={{ float: 'left' }} type="submit" name="next" className="sp_btn" value="Submit" />
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset data-step="3" id="thankyou">
                  <div className="thankyou_wrap">
                    <div>
                      <img style={{width:'70px'}} src={mail_icon} alt="img" />
                    </div>
                    <h1 style={{ textAlign: 'center' }}>Thank You !</h1>
                    <p style={{ textAlign: 'center' }}>Thank you for chossing Us<br /> You'll receive confirmation email soon</p>
                    <div className="sp_booking_details">
                      <div className="row">
                        <div className="col-sm-12">
                          <h4 className="">Booking Receipt</h4>
                          <p className="">Booking request successfully forwarded to admin. Please await further updates. Thank you!</p>
                        </div>

                        <div className="col-sm-12">
                          <h5 className="mb-3">Booking Information</h5>
                          <table className="table table-bordered " style={{ textAlign: 'left' }}>
                            <tbody><tr>
                              <th>Booking Id</th>
                              <td>Order#2546545451</td>
                            </tr>
                              <tr>
                                <th>Name</th>
                                <td id="name"></td>
                              </tr>
                              <tr>
                                <th>Date</th>
                                <td id="date"></td>
                              </tr>
                              <tr>
                                <th>Time</th>
                                <td id="time"></td>
                              </tr>
                              <tr>
                                <th>Description</th>
                                <td id="description"></td>
                              </tr>
                              <tr>
                                <th>Full Address</th>
                                <td id="full_address_val"></td>
                              </tr>
                              <tr>
                                <th>City</th>
                                <td id="city_val"></td>
                              </tr>
                            </tbody>
                            </table>
                        </div>
                        {/* <div className="col-sm-6">
                          <h5 className="text-start"></h5>
                          <ul className="sp_booking_details_list">
                            <li>India</li>
                            <li>RVS Agriculture University Campus, Thatipur, Gwalior, Madhya Pradesh, India</li>
                            <li> indore</li>
                            <li> Madhya pradesh</li>
                            <li> 452001</li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                    <p style={{ textAlign: 'center' }}><a className="sp_btn mt-3" href="/dashboard">Go To Dashboard</a></p>
                  </div>
                  <input type="submit" className="submit sp_btn" value="Submit" target="_top" />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test;