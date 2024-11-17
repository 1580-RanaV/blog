import React from 'react'

const Education = () => {
  return (
    <div>
      <section>
        <h3 className="font-sans text-black mb-5">Education</h3>

        <div className='mb-5'>
          <div className='border border-gray-200 border-1 p-4 sm:p-5 rounded-2xl shadow-lg'>
            <div className="mb-2 flex items-center">
              <div className="rounded bg-gray-200 p-2 mr-4 min-w-[48px] flex items-center justify-center">
                <img src="/gitam.jpeg" alt="GITAM University" className="w-8 h-8 object-contain" />
              </div>
              <p className="text-black leading-relaxed font-sans text-sm sm:text-base">Gandhi Institute of Technology and Management (GITAM) University</p>
            </div>
            <span className="font-mono block mb-5 text-sm sm:text-base">
              Bachelor of Technology, Computer Science and Engineering. Class of 2025.<br/>
              <strong className='font-sans'>CGPA: 8.42</strong>
            </span>
          </div>
        </div>

        <div className='mb-5'>
          <div className='border border-gray-200 border-1 p-4 sm:p-5 rounded-2xl shadow-lg'>
            <div className="mb-2 flex items-center">
              <div className="rounded bg-gray-200 p-2 mr-4 min-w-[48px] flex items-center justify-center">
                <img src="/sri.jpg" alt="Sri Chaitanya" className="w-8 h-8 object-contain" />
              </div>
              <p className="text-black leading-relaxed font-sans text-sm sm:text-base">Sri Chaitanya Jr. College (Intermediate)</p>
            </div>
            <span className="font-mono block mb-5 text-sm sm:text-base">
            Completed Intermediate (12th grade) in MPC (Math, Phy, and Chem) in 2021.<br/>
              <strong className='font-sans'>Percentage: 92.7%</strong>
            </span>
          </div>
        </div>

        <div>
          <div className='border border-gray-200 border-1 p-4 sm:p-5 rounded-2xl shadow-lg'>
            <div className="mb-2 flex items-center">
              <div className="rounded bg-gray-200 p-2 mr-4 min-w-[48px] flex items-center justify-center">
                <img src="/dps.png" alt="Delhi Public School" className="w-6 h-6 object-contain" />
              </div>
              <p className="text-black leading-relaxed font-sans text-sm sm:text-base">Delhi Public School (Xth)</p>
            </div>
            <span className="font-mono block mb-5 text-sm sm:text-base">
            Completed Secondary Education (10th grade) in 2019.<br/>
              <strong className='font-sans'>Percentage: 86.66%</strong>
            </span>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Education