import React from 'react'
import './Footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {IoIosArrowDropupCircle} from 'react-icons/io'

function Footer() {
  return (
    <footer>
        <p>learnIt! © 2023</p>
        <a href='#termsModal' data-bs-toggle="modal">
            Terms and Services
        </a>

    <div className="modal fade" id="termsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel" style={{color: 'black', textAlign: 'center'}}>Terms and Services</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body" style={{color: "black", textAlign: "justify"}}>
            <p>learnIt! mission is to improve lives through learning. We enable anyone anywhere to create and share educational content (instructors) and to access that educational content to learn (students). We consider our marketplace model the best way to offer valuable educational content to our users. We need rules to keep our platform and services safe for you, us, and our student and instructor community. These Terms apply to all your activities on the learnIt! website, the learnIt! mobile applications, our TV applications, our APIs, and other related services (“Services”).</p>
            <p>If you publish a course on the learnIt! platform, you must also agree to the Instructor Terms. We also provide details regarding our processing of personal data of our students and instructors in our Privacy Policy. If you are using learnIt! as part of your employer’s learnIt! Business learning and development program, you can consult our learnIt! Business Privacy Statement.</p>
            <p>If you live in the United States or Canada, by agreeing to these Terms, you agree to resolve disputes with learnIt! through binding arbitration (with very limited exceptions, not in court), and you waive certain rights to participate in className actions, as detailed in the Dispute Resolution section.</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer
