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

      <div className="text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, impedit aperiam sint minus totam et, illo rem doloremque optio, quisquam labore ratione voluptatem saepe reiciendis exercitationem corrupti voluptatibus nobis? Nihil.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae et doloribus assumenda id! Accusantium corporis ab itaque atque quis nisi recusandae dolores debitis illo officia, iure eos optio est.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum cupiditate, assumenda animi ea, voluptates explicabo saepe ab reiciendis dolorem non excepturi itaque at totam iusto alias quos ex consequuntur accusamus.
      </div>
    </div>
  );
}

export default Home;