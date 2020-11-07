import React from 'react';
import HomeIntro from '../components/home/HomeIntro';
import FeatureCard from '../components/shared/cards/FeatureCard';

const Home = () => {

  return (
    <div className="homeContainer">
      <HomeIntro />


      <section className="container-fluid">
        <h1 className="text-dark text-center card-title">برخی از ویژگی های ما</h1>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="row flex-md-column flex-lg-row">
              <article className="col-12 col-lg-6 card-box">
                <FeatureCard title="لورم ایپسوم" imgURL={require('../../assets/img/code.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد." />
              </article>

              <article className="col-12 col-lg-6 card-box">
                <FeatureCard title="لورم ایپسوم" imgURL={require('../../assets/img/design.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد." />
              </article>

            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row flex-md-column flex-lg-row">
              <article className="col-12 col-lg-6 card-box">
                <FeatureCard title="لورم ایپسوم" imgURL={require('../../assets/img/rocket.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد." />
              </article>

              <article className="col-12 col-lg-6 card-box">
                <FeatureCard title="لورم ایپسوم" imgURL={require('../../assets/img/24-hours.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد." />
              </article>

            </div>
          </div>
        </div>
      </section>

      <div className="text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, impedit aperiam sint minus totam et, illo rem doloremque optio, quisquam labore ratione voluptatem saepe reiciendis exercitationem corrupti voluptatibus nobis? Nihil.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae et doloribus assumenda id! Accusantium corporis ab itaque atque quis nisi recusandae dolores debitis illo officia, iure eos optio est.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum cupiditate, assumenda animi ea, voluptates explicabo saepe ab reiciendis dolorem non excepturi itaque at totam iusto alias quos ex consequuntur accusamus.
      </div>
    </div>
  );
}

export default Home;