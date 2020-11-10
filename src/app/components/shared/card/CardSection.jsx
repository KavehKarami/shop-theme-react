import React from 'react';

const CardSection = (props) => {
  return (
    <section className="container-fluid">
      <h1 className="text-dark text-center card-title">{props.title}</h1>
      <div className="row mb-3">

        {/* <div className="col-12 col-sm-6">
          <div className="row flex-md-column flex-lg-row">
            
            <article className="col-12 col-lg-6 card-box">
              <WorkSampleCard titr="لندینگ پیج روبیکا" title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
            </article>

            <article className="col-12 col-lg-6 card-box">
              <WorkSampleCard titr="لندینگ پیج روبیکا" title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
            </article>

          </div>
        </div> */}

        {props.children}


      </div>
    </section>
  );
}

export default CardSection;