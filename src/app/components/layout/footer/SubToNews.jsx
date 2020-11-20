import React from 'react';
import DashedInput from '../../shared/inputs/DashedInput';
import FollowUs from '../../shared/sections/FollowUs';

const SubToNews = () => {
  return (
    <section className="row sub-to-news mb-md-5 flex-column flex-md-row-reverse">
      <div className="position-relative">
        <DashedInput className="mb-2 mb-md-0 mr-md-5" placeholder="example: asd@asd.com" />
        <div className="mb-4 mb-md-0 mt-md-3 pr-md-5 input-caption">با عضویت در خبرنامه از آخرین تخفیفات و آفر های ما باخبر باشید.</div>
      </div>
      <FollowUs />
    </section>
  );
}

export default SubToNews;