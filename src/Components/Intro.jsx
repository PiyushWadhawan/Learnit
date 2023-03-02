import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div className='container' style={{paddingTop: "4rem"}}>
        <hr />
        <h2>We are a bunch of awesome people who believe in constant upskilling and we are working together to make sure you get the best resources to grow yourself in things you are passionate about</h2>
        <hr />
        <div className='container'>
            <img id="intro-img" src="https://teamleader.fra1.cdn.digitaloceanspaces.com/corporate/production/header/_AUTOxAUTO_crop_center-center_80_none/team.jpg" alt="" />
        </div>
        <div className='container'>
            <hr />
            <div className='row'>
                <div className='col'>
                    <h3>Who we are</h3>
                    <p>We are humans who are working hard to create the best courses to help you on your journey</p>
                </div>
                <div className='col'>
                    <h3>What we do</h3>
                    <p>We create courses on a diverse range of topics be it Artifical intelligence or video editing</p>
                </div>
                <div className='col'>
                    <h3>What we love</h3>
                    <p>Some of us love extra cup of tea and cuppa and others like beer</p>
                </div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default Intro
