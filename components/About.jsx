import { useState } from "react"

function About() {
    const [showResume,setShowResume]=useState(false)

    return (
      <>
        <section id="about" className="about">
            <h1>About Me</h1>
            <p>I'm a Student Doing My MSc Computer Science in UCD</p>
              <div className="about-links">
                <a href="https://github.com/Gokulsajeev15" target="_blank" rel="noopener noreferrer">
                    <img src="/My_Portfolio/assets/github-mark.png" alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/gokulsajeev/" target="_blank" rel="noopener noreferrer">
                    <img src="/My_Portfolio/assets/InBug-Black.png" alt="LinkedIn" className="social-icon-l" />
                </a>
              </div>
              <button className="resume-button" onClick={()=>{setShowResume(!showResume)}}>
                <p>{showResume?'Hide Resume':'View My Resume'}</p>
              </button>
              {showResume && (
                <div className="resume-display">
                  <iframe src="/My_Portfolio/assets/GokulSajeev-Resume.pdf" width="100%" height="500px" title="Resume"></iframe>
                </div>
              )}
              <h3>Or</h3>
              <a href="/My_Portfolio/assets/GokulSajeev-Resume.pdf" download>
                  <button className="download-button" >Download</button>
              </a>
              
        </section>
      </>
    )
  }
  export default About 