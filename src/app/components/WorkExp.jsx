import React from 'react'

const WorkExp = () => {
  return (
    <div>
        <section>
            <h3 className="font-sans text-black mb-5">Work experience</h3>
            <div className='mb-5 border border-gray-200 border-1 p-5 rounded-2xl shadow-lg'>
              <p className="mb-2 text-black leading-relaxed font-sans flex justify-between">
                Fluentgrid Limited, Full Stack Intern
                <span>
                  (for a month)
                </span>
              </p>
              <span className="font-mono block mb-5">
                Brushed up some SQL, Python and had a smell of Java.
                Built a full stack banking app that uses CRUD operations, MySQL and Postman for API testing.
                Got a peek at company's software development methodologies turns out there's a lot more than just code and coffee.
              </span>
            </div>

            <div className='border border-gray-200 border-1 p-5 rounded-2xl shadow-lg'>
              <p className="mb-2 text-black leading-relaxed font-sans flex justify-between">
                Thrusoft Solutions, Machine Learning Intern
                <span>
                  (remote)
                </span>
              </p>
              <span className="font-mono block mb-5">
                Built an ANPR system using Python and OpenCV after diving into machine learning basics and algorithms, boosting number plate recognition accuracy to 80 - 85% and ideated storage-efficient solutions.
                It was a group project. 
              </span>
            </div>
            </section>
    </div>
  )
}

export default WorkExp