import React from 'react'

const Projects = () => {
  return (
    <div>
        <section>
            
            <div className='mb-12'>
            <h3 className="font-sans text-black mb-5">Few projects</h3>
              <div className = "border border-gray-200 border-1 p-5 rounded-2xl shadow-lg">
                <p className="mb-2 text-black leading-relaxed font-sans">
                PureText
                </p>
                <img src="/puretext.png" alt="PureText" className="mb-2 border rounded-xl" />
                <span className='font-mono mb-1.5 block'>
                An application where users can convert regular text to plagiarism-free text with the help of a LLM
                 — smooth, responsive, <i>blazing fast</i> and at the least 80% effective from tools like TurnItIn, Grammarly.
                </span>
                <a 
                className='text-blue-500 font-sans'
                href='https://puretextbydatco.vercel.app'>
                 <span className='flex'>PureText
                 <svg 
                  className="feather feather-arrow-up-right" 
                  fill="none" 
                  height="24" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="7" x2="17" y1="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
                </span>
                </a>
              </div>
            </div>

            <div className='mb-12'>
              <div className = "border border-gray-200 border-1 p-5 rounded-2xl shadow-lg">
                <p className="mb-2 text-black leading-relaxed font-sans">
                SpeedCode
                </p>
                <img src="/speedcode.png" alt="PureText" className="mb-2 border rounded-xl" />
                <span className='font-mono mb-1.5 block'>
                A platform where users can practice essential coding algorithms while improving their typing speed. 
                Two goals in one place — choose an algorithm, type it out, and track your progress<br/>
                </span>
                <a 
                className='text-blue-500 font-sans flex'
                href='https://speedcode.vercel.app'>
                SpeedCode<svg 
                  className="feather feather-arrow-up-right" 
                  fill="none" 
                  height="24" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="7" x2="17" y1="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
                </a>
              </div>
            </div>

            <div>
              <div className = "border border-gray-200 border-1 p-5 rounded-2xl shadow-lg">
                <p className="mb-2 text-black leading-relaxed font-sans">
                Client Personal Portfolio
                </p>
                <img src="/portfolio.png" alt="PureText" className="mb-2 border rounded-xl" />
                <span className='font-mono mb-1.5 block'>
                A modern portfolio for a client using bare HTML, CSS and JavaScript. With consistent typography, buttery smooth transitions using GSAP
                and simple to use and navigate UI. Got 300+ site visits.<br/>
                </span>
                <a 
                className='text-blue-500 font-sans'
                href='https://puretextbydatco.vercel.app'>
                <span className='flex'>
                Visit Site
                <svg 
                  className="feather feather-arrow-up-right" 
                  fill="none" 
                  height="24" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="7" x2="17" y1="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </span>
              </a>
              </div>
            </div>

            </section>
    </div>
  )
}

export default Projects