import React from 'react'

const Participations = () => {
  return (
    <div>
        <section>

<h3 className="font-sans text-black mb-5">Participations</h3>

  <div className='mb-5'>
  <div className='border border-gray-200 border-1 p-5 rounded-2xl shadow-lg'>
  <div className="mb-2 flex items-center">
    <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-200 p-2 mr-4">
      <img src="/providence.svg" alt="GitHub" className="w-30 h-6" />
    </a>
    <p className="text-black leading-relaxed font-sans">Providence Ideathon 2024</p>
  </div>
  <span className="font-mono block mb-5">
  Took on a health-focused problem statement at Unstop and advanced to the second round — one step away from the finals.
  </span>
  </div>
  </div>


  <div className='mb-5'>
  <div className='border border-gray-200 border-1 p-5 rounded-2xl shadow-lg'>
  <div className="mb-2 flex items-center">
    <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer" className="rounded bg-gray-200 p-2 mr-4">
      <img src="/catalog.jpg" alt="GitHub" className="w-8 h-8" />
    </a>
    <p className="text-black leading-relaxed font-sans">Catalog Hackathon</p>
  </div>
  <span className="font-mono block mb-5">
  Reached the final round of a competitive Catalog hackathon, ranking among the top participants in a hiring process that tested skills in prompt 
  engineering and problem-solving. Problem statement based on an MIT paper on Cryptography.
  </span>
  </div>
  </div>


  <div>
  <div className='border border-gray-200 border-1 p-5 rounded-2xl shadow-lg'>
  <div className="mb-2 flex items-center">
    <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-200 p-2 mr-4">
      <img src="/iim.jpeg" alt="GitHub" className="w-6 h-6" />
    </a>
    <p className="text-black leading-relaxed font-sans">IIM Rohtak Logo Competition</p>
  </div>
  <span className="font-mono block mb-5">
  Consolation in IIM Rohtak logo design competiton, at Unstop. 
  </span>
  </div>
  </div>

</section>
    </div>
  )
}

export default Participations