import React from 'react'
import './Contact.css'


const OurTeam = () => {
  return (
    <>
      <div className="support-team-section">
        <h2>Our Support Team</h2>
        <div className="support-team-grid">
          <div className="team-member">
            <img src="https://thumbs.dreamstime.com/b/close-up-headshot-portrait-smiling-caucasian-young-businessman-formal-suit-pose-office-profile-picture-happy-confident-288413326.jpg" alt="Support member 1" />
            <h3>Courtney</h3>
            <p>Minnesota, US</p>
            <p>French fry enthusiast and wearer of mismatched socks.</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWXDkQYlR_Jmjn0yuU6UI9SyFDP9L8MHwfA&s" alt="Support member 2" />
            <h3>Katee</h3>
            <p>Pennsylvania, US</p>
            <p>Will always talk to you about her tomato plants.</p>
          </div>
          <div className="team-member">
            <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029-1024x683.jpg" alt="Support member 3" />
            <h3>Rodrigo</h3>
            <p>Rio de Janeiro, Brazil</p>
            <p>Listening to Kylie Minogue.</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6nhTPn2KsCEA5oCd19uqp5dHJnB159XXVw&s" alt="Support member 4" />
            <h3>Samantha</h3>
            <p>Bansko, Bulgaria</p>
            <p>If lost, look for her in the mountains.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam
