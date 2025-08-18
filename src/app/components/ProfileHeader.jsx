import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="flex flex-row items-start justify-between mb-5 px-4 gap-4">
      <div className="flex-1">
        <h6 className="text-3xl sm:text-5xl font-bold text-black mb-3">
          V Ranadheer
        </h6>
        <p className="text-sm">
          <span className="font-mono">Graduate</span>
        </p>
        <p className="text-sm">
          <span className="font-mono">Creative Developer</span>
        </p>
        <p className="text-sm mb-5">
          <span className="font-mono">Andhra Pradesh, India</span>
        </p>
        <div className="flex space-x-4">
          <div className="min-w-[40px] min-h-[40px] flex items-center justify-center">
            <a 
              href="https://github.com/1580-RanaV" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-green-300 p-2 w-10 h-10 flex items-center justify-center"
            >
              <img src="/github-logo.svg" alt="GitHub" className="w-6 h-6 object-contain" />
            </a>
          </div>
          <div className="min-w-[40px] min-h-[40px] flex items-center justify-center">
            <a 
              href="https://www.linkedin.com/in/vrana11/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-blue-300 p-2 w-10 h-10 flex items-center justify-center"
            >
              <img src="/LinkedIN_black.svg" alt="LinkedIn" className="w-6 h-6 object-contain" />
            </a>
          </div>
          <div className="min-w-[40px] min-h-[40px] flex items-center justify-center">
            <a 
              href="https://www.instagram.com/byvrana/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-orange-300 p-2 w-10 h-10 flex items-center justify-center"
            >
              <img src="/insta-logo.svg" alt="Twitter" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 mt-2">
        <img src="/myphoto.jpeg" alt="Your Photo" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ProfileHeader;