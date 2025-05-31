import { useState } from "react"

function About() {
    const [showResume,setShowResume]=useState(false)
    return (
      <>
        <section id="about" className="about">
            <h1>About Me</h1>
            <p>I'm a Student Doing My MSc Computer Science in UCD</p>
        <p>👋 Hi, I'm Gokul Sajeev, a passionate software developer with a keen interest in building innovative solutions. Currently pursuing my MSc in Computer Science at University College Dublin, I have a strong foundation in software development and a growing expertise in cloud technologies.</p>
        <p>💻 I have hands-on experience in developing full-stack applications, with a focus on creating efficient and scalable solutions. My projects include a finance assistant leveraging OpenAI's GPT, an eCommerce platform for agricultural products, and an automated survey scheduler using machine learning.</p>
        <p>🌱 I am continuously learning and exploring new technologies, with a particular interest in cloud computing and AI. I thrive on challenges and enjoy collaborating with others to create impactful software solutions.</p>
        <p>📫 Feel free to connect with me on GitHub or LinkedIn, or download my resume to learn more about my work and experiences.</p>
        

            <p></p>
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