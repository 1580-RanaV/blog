import React from 'react'

const Clubs = () => {
  return (
    <div>
        <section>
            
            <h3 className="font-sans text-black mb-5">University club activities</h3>
            <div className='border border-gray-200 border-1 p-5 rounded-2xl shadow-lg'>
            <div className="mb-2 flex items-center">
              <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-200 p-2 mr-4">
                <img src="/google.svg" alt="GitHub" className="w-6 h-6" />
              </a>
              <p className=" text-black leading-relaxed font-sans">Lead Graphic Designer<br/>Google Developer Student Clubs (GDSC)</p>
            </div>
            <span className="font-mono block mb-5">
            Led a team for the graphic work events within and outside university. Created graphics for Google Club events for almost an year with 1,000+ participants — delivering visuals that made an impact.
            Worked with Figma and Adobe PhotoShop CS6.
            </span>
            </div>

          </section>
    </div>
  )
}

export default Clubs