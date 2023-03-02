import React from 'react'

function FAQs() {
  return (
    <>
      <div className='container' style={{marginTop: "8rem"}}>
        <h1>FAQs</h1>
        <hr />
        <br />
        <h3>Wanted to learn with us, still have some queries</h3>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is the criteria to get certificate?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">The certificate can be provided only if all the assignments and projects are completed. Once done, you can download the certificate using the LMS. </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Do I get life time access to course recording ?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Yes, you will get lifetime access to the course recording</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                How to join a Live session?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Login to your LMS. Under My classNameroom, go to Course and check the className schedule. At the time of className, under upcoming className, you shall see JOIN NOW button, by clicking on the JOIN NOW button, you will be directed to the Zoom platform where the classNamees will be conducted. Please note that the Join Now Button will only be available at the time of className. </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                How can I change my Batch?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Go to the support tab and click on Batch Shift, You will be asked to agree to terms & conditions, please select the course and reason for batch shift. Now choose the batch you want to Join.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                How to extend the due date/get extra time for project and assignments?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">The submission option will be available even after the deadline is crossed. Please note that the submissions are mandatory to obtain the certificate.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                How to download/view a certificate?
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">To download/view the certificate please do the following. Login to your LMS, go to My classNameroom and click on the Course Name available on the left side of your LMS and finally click on certificate to view or download the certificate</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQs
