import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import ShapeDivider1 from '../components/home/ShapeDivider1';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="position-relative homeIntro">
        <div className="py-3 px-5">سایت ما</div>
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
        <div className="px-4 my-1 p-md-4 btn-box text-center">
          <Link to="price" className="btn btn-primary">سفارش دهید</Link>
        </div>
        <ShapeDivider1 />
      </div>


    </div>
  );
}

export default Home;