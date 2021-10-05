import React from 'react';


const Enroll = () => {
    return (
        <div className=" container-fluid mx-auto w-50 pe-5 ">
            <h2 className="mb-5 ps-5 font-monospace">Enrollment Form</h2>
             <div className=" ms-5 mb-5 ">
            <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="First name" aria-label="First name"  required=""/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Last name" aria-label="Last name" required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>


            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Requird)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address 
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div className="invalid-feedback">
                Please enter your present address.
              </div>
            </div>


            <div className="col-md-6">
              <label for="country" className="form-label">Course</label>
              <select className="form-select" id="country" required="">
                <option value="">Choose Course</option>
                <option>React JS</option>
                <option>Node JS</option>
                <option>Database</option>
                <option>Javascript</option>
                <option>Bootstrap and Tailwind</option>
                <option>React Native</option>
                <option>Redux</option>
                <option>Express JS</option>
                <option>Material UI</option>
                <option>UI and UX Design</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid id
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <label for="country" className="form-label">Payment</label>
              <select className="form-select" id="country" required="">
                <option value="">Payment Method</option>
                <option>BKash</option>
                <option>Nagad</option>
                <option>Card</option>
                <option>Cash</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
              
            </div>
              <button type="button" className="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-success" id="exampleModalLabel">Successfully Enrolled!!</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                          <h3 className="text-secondary font-monospace">Thank you for your support and enroll our course.</h3>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Enroll;