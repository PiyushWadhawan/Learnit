import React from 'react'

function Signup() {
  return (
    <>
      <div className='container' style={{marginTop: "10rem"}}>
          <div className='row'>

            <div className='col-md-6'>
              <h2>Not yet registered ?</h2>
              <br />
              <hr />
              <h3>Signup</h3>
              <hr />
              <form className='form-horizontal'>
              <div className="mb-3 row">
                <label for="name" className="col-md-2 col-form-label">Name</label>
                <div className="col-md-6" style={{border: "solid 2px rgb(211, 211, 211)", borderRadius: "10px"}}>
                  <input type="text" readonly className="form-control-plaintext" id="name" placeholder='Enter your name'/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="email" className="col-md-2 col-form-label">Email</label>
                <div className="col-md-6" style={{border: "solid 2px rgb(211, 211, 211)", borderRadius: "10px"}}>
                  <input type="email" readonly className="form-control-plaintext" id="email" placeholder='email@gmail.com'/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="pass" className="col-md-2 col-form-label">Password</label>
                <div className="col-md-6" style={{border: "solid 2px rgb(211, 211, 211)", borderRadius: "10px"}}>
                  <input type="password" readonly className="form-control-plaintext" id="pass" placeholder='Enter password'/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="passw" className="col-md-2 col-form-label">Confirm Password</label>
                <div className="col-md-6" style={{border: "solid 2px rgb(211, 211, 211)", borderRadius: "10px"}}>
                  <input type="password" readonly className="form-control-plaintext" id="passw" placeholder='Enter the same password'/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="passw" className="col-md-2 col-form-label"></label>
                <button type="button" className="btn btn-secondary col-md-2" style={{marginRight: "1rem"}}>Reset</button>
                <button type="button" className="btn btn-primary col-md-2">Login</button>
              </div>
              </form>
            </div>

            <div className='col-md-6'>
              <h2>Already have an account</h2>
              <br />
              <hr />
              <h3>Login</h3>
              <hr />
              <form className='form-horizontal'>
              <div className="mb-3 row">
                <label for="uname" className="col-md-2 col-form-label">Username</label>
                <div className="col-md-6" style={{border: "solid 2px rgb(211, 211, 211)", borderRadius: "10px"}}>
                  <input type="text" readonly className="form-control-plaintext" id="uname" placeholder='Enter your name'/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="upass" className="col-md-2 col-form-label">Password</label>
                <div className="col-md-6" style={{border: "solid 2px rgb(211, 211, 211)", borderRadius: "10px"}}>
                  <input type="password" readonly className="form-control-plaintext" id="upass" placeholder='Enter password'/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="passw" className="col-md-2 col-form-label"></label>
                <button type="button" className="btn btn-secondary col-md-2" style={{marginRight: "1rem"}}>Reset</button>
                <button type="button" className="btn btn-primary col-md-2">Login</button>
              </div>
              </form>
            </div>

          </div>
      </div>
    </>
  )
}

export default Signup
