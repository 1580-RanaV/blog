import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Projects from './components/Projects';
import WorkExp from './components/WorkExp';
import Clubs from './components/Clubs';
import Participations from './components/Participations';
import Education from './components/Education';
import Contact from './components/Contact';
import Thankyou from './components/Thankyou';
import SelfIntro from './components/SelfIntro';
import ShareProfile from './components/ShareProfile';

import { supabase } from '../utils/supabaseClient';

const Page = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Main container with responsive padding */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
        {/* Content wrapper with responsive padding and spacing */}
        <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8">
          {/* Header section */}
          <div className="mb-8 sm:mb-12">
            <ProfileHeader />
          </div>

          <div className='mb-4 sm:mb-12'>
          <ShareProfile
            website="https://www.vrana.fun/"
            imageSrc="/share-view.png"
            imageAlt="V Ranadheer"
          />
          </div>

          {/* Intro section */}
          <div className="mb-8 sm:mb-12">
            <SelfIntro />
          </div>

          {/* Main content sections with responsive spacing */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* <CurrentlyBuilding /> */}
            <Projects />
            <WorkExp />
            <Clubs />
            <Participations />
            <Education />
            <Contact />
            <div className="pt-4 sm:pt-8">
              <Thankyou />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;