import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h6 className="inline-block text-3xl sm:text-5xl font-bold text-black mb-3">
          V Ranadheer
        </h6>
        <p className="text-sm">
              <span className="font-mono">Senior Undergrad</span>
            </p>
            <p className="text-sm">
              <span className="font-mono">Creative Developer</span>
            </p>
            <p className="text-sm mb-5">
              <span className="font-mono">Andhra Pradesh, India</span>
            </p>
        <div className="flex space-x-4">
          <a href="https://github.com/1580-RanaV" target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-300 p-2">
            <img src="/github-logo.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/vrana11/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-300 p-2">
            <img src="/LinkedIN_black.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/accordingtorana/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-orange-300 p-2">
            <img src="/insta-logo.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer" className="rounded-full p-2">
            <img src="/forward-logo.svg" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="w-40 h-40 rounded-full overflow-hidden">
        <img src="/myphoto.jpeg" alt="Your Photo" className="w-full h-full object-cover" />
      </div>

    </div>
  );
};

export default ProfileHeader;