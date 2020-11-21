import React from 'react';
import Typed from 'react-typed';
import BtnWater from '../shared/buttons/BtnWater';
import ShapeDivider1 from '../shared/shape-dividers/ShapeDivider1';

const HomeIntro = () => {
  return (
    <div className="position-relative homeIntro">
      <div className="py-3 px-5 font-weight-bold text-md-none">سایت ما</div>
      <h1 className="title text-center p-md-4">
        <Typed
          strings={['بهترین سایت ها']}
          typeSpeed={60}
          showCursor={false}
        // stopped={false}
        />
      </h1>
      <h2 className="description text-center p-2 p-md-4">
        <Typed
          strings={['خیالت راحت باشه ما هواتو داریم', 'رویاهات با ما تحقق پیدا میکنن']}
          typeSpeed={60}
          backSpeed={30}
          loop
        />
      </h2>

      <BtnWater href="pricing" title="سفارش دهید" />

      <ShapeDivider1 />
    </div>
  );
}

export default HomeIntro;