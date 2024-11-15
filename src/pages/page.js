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

import { supabase } from '../utils/supabaseClient';

const Page = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-white rounded-lg p-8">

          {/* header */}
          <ProfileHeader />

          {/* intro*/}
          <SelfIntro/>

          {/* different parts are kept into sections from here */}
          <div className="space-y-12">
            
          <CurrentlyBuilding/>

            {/* projects section */}
            <Projects/>


            {/* work experience */}
            <WorkExp/>


            {/* clubs */}
            <Clubs/>


          {/* participations */}
          <Participations/>


          {/* education */}
          <Education/>



          {/* reach me out */}
          <Contact/>


          {/* end thank u note */}
          <Thankyou/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
