import React from 'react'
import {AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai"

function Contact() {
  return (
    <>
      <div className='container' style={{marginTop: "10rem"}}>
          <div className='row'>

            <div className='col-md-6'>
              <h2>We are here</h2>
              <img style={{width: "80%"}} src="https://developers.google.com/static/maps/images/landing/hero_geocoding_api.png"  alt="" />
              <p>Main headquarters</p>
            </div>

            <div className='col-md-6'>
              <h2>Not yet registered ?</h2>
              <br />
              <hr />
              <h3>Signup</h3>
              <hr />
              <form className='form-horizontal'>
              <div className="mb-3 row">
                <label for="ques" className="col-md-2 col-form-label">Query</label>
                <div className="col-md-6" style={{border: "solid 2px rgb(211, 211, 211)", borderRadius: "10px"}}>
                  <input type="text" readonly className="form-control-plaintext" id="ques" placeholder='Enter the question you want to ask'/>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="email" className="col-md-2 col-form-label">Email</label>
                <div className="col-md-6" style={{border: "solid 2px rgb(211, 211, 211)", borderRadius: "10px"}}>
                  <input type="email" readonly className="form-control-plaintext" id="email" placeholder='email@gmail.com'/>
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
        <div style={{backgroundColor: "rgb(218, 218, 218)", padding: "1rem 0", marginTop: "2rem", borderRadius: "15px"}}>
          <h3 style={{textAlign: "center"}}>Socials</h3>
          <div style={{display: "flex", gap: "2rem", justifyContent: "center"}}>
            <h3><a href="&nbsp" style={{color: "black"}}><AiFillLinkedin/></a></h3>
            <h3><a href="&nbsp" style={{color: "black"}}><AiFillTwitterCircle/></a></h3>
            <h3><a href="&nbsp" style={{color: "black"}}><AiFillInstagram/></a></h3>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact
