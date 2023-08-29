import React from 'react';

const Profile = () => {
  return (
    <div className='container'>
      <div className="sp_dashboard_tabs sp_margin">
        <div id="v-pills-address" role="tabpanel" aria-labelledby="v-pills-address-tab">
          <div className="card sp_dashboard_box" style={{height:'400px'}}>
            <div className="card-header">
              <h5 className="mb-0">Profile Details </h5>
            </div>
            <div className="card-body">
              <form method="POST" action="/update">
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">Name</label>
                      <input type="hidden" name="_token" value="4QIsTTLldeyyJ4pqvi1iGUL6kFIPQsG85haWpwof" />
                      <input type="text" name="name" placeholder="Name" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">Profile Image</label>
                      <input type="file" name="image" placeholder="Enter password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">Phone</label>
                      <input type="text" name="mobile" placeholder="Enter Mobile Number" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">Password</label>
                      <input type="password" name="password" placeholder="Enter password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="sp_form_field">
                      <label htmlFor="" className="mb-3">Email</label>
                      <input type="email" name="email" placeholder="Enter Email" className="form-control" />
                    </div>
                  </div>
                  <input type="hidden" name="id" value="24" />
                  <div className="col-md-6 mt-3">
                    <input type="submit" value="Update" className="form-control sp_btn mb-3" />
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

export default Profile;