import './App.css'
function App() {

  return (
    <form>
      <div className='container mt-2'>
        <div className='row justify-content-center'>
          <div className='col-md-8 p-4 border rounded shadow-lg bg-light'>
            <div className='container-fluid text-start'>
              <div className='row'>
                <div className='col-12 p-3 text-center'>
                  <h4>Faculty Registration Page</h4>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label className="form-label">Full Name*</label>
                    <input type="text" className="form-control" placeholder='Please enter your full name' required />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" className="form-control" placeholder='Please enter your valid email' required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="Enter phone number" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" value="male" />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" value="female" />
                      <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" value="other" />
                      <label className="form-check-label">Other</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Department</label>
                    <select className="form-select" aria-label="Default select example" required>
                      <option value>Choose...</option>
                      <option value="1">Computer Science</option>
                      <option value="2">Mathematics</option>
                      <option value="3">Physics</option>
                      <option value="4">Biology</option>
                      <option value="5">English</option>
                      <option value="5">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className='form-label'>Designation</label>
                    <input type="text" className="form-control" placeholder="Enter designation" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input as="textarea" className="form-control" placeholder="Enter address" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Profile Picture</label>
                    <input type="file" className="form-control" required />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" class="form-control" required />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" class="form-control" required />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div class="mb-3">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div class="mb-3 d-flex">
                  <p>Already have an account?</p> <a className='ms-2' href="">Login here</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default App
