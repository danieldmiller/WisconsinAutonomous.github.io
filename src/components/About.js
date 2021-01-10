import React from 'react'

const About = ({ orgData }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="https://github.com/WisconsinAutonomous/wa-resources/blob/master/Images/wa-dark.png?raw=true"
            alt=""
          />
        </div>

        <div className="nine columns main-col">
          <h2>{orgData.aboutSite}</h2>
        </div>
      </div>
    </section>
  )
}

export default About
