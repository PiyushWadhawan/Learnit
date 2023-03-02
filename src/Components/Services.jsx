import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className='container features'>
        <div className='row'>
            <div className='col-md-4 yo'>
                <img src="data:image/png;base64,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" className="img-fluid" alt="..."/>
                <h2 style={{textAlign: "center"}}>Live classes</h2>
                <p>Learn from our Experts and get Real-Time Guidance</p>
            </div>
            <div className='col-md-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvb1ritUaI2VsJ-YMQkBen-uM02J5hJILwQ&usqp=CAU" className="img-fluid" alt="..."/>
                <h2 style={{textAlign: "center"}}>Flexible schedule</h2>
                <p>Reschedule your Batch/Class at Your Convenience</p>
            </div>
            <div className='col-md-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5qOvF8MJdrsRzRSOw8hsrPS82vVxGl4MkQ&usqp=CAU" className="img-fluid" alt="..."/>
                <h2 style={{textAlign: "center"}}>24 x 7 Support</h2>
                <p>Personalized Guidance from our 24x7 Team</p>
            </div>
        </div>
        <br />
        <hr />
    </div>
  )
}

export default Services
