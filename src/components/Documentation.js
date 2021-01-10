import React from 'react'

const Documentation = ({ orgData }) => {
  return (
    <section id="docs">
      <div className="row documentation">
        <div className="three columns header-col">
          <h1>
            <span>Documentation</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {orgData.documentation &&
            orgData.documentation.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.documentationName}</h3>
                    <p className="info"><a href={item.documentationLink}>Documentation</a></p>
                    <p className="info"><a href={item.repoLink}>Github Link</a></p>
                    <p>{item.documentationDescription}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Documentation
