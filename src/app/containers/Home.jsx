import React from 'react';
import FeaturesSection from '../components/home/FeaturesSection';
import HomeIntro from '../components/home/HomeIntro';
import LastestPostsSection from '../components/home/LastestPostsSection';
import OurTeamSection from '../components/home/OurTeamSection';
import WorkSampleSection from '../components/home/WorkSampleSection';
import WhyUsSection from '../components/whyUs/WhyUsSection';

const Home = () => {
  return (
    <div className="homeContainer">
      <HomeIntro />

      <FeaturesSection />

      <WorkSampleSection />

      <OurTeamSection />

      <WhyUsSection />

      <LastestPostsSection />

    </div>
  );
}

export default Home;