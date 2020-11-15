import React from 'react';
import CardBox from '../shared/card/CardBox';
import CardContainer from '../shared/card/CardContainer';
import Section from '../shared/sections/Section';
import BlogCard from '../shared/cards/BlogCard';

const LastestPostsSection = () => {
  return (
    <Section title="آخرین پست‌های بلاگ">
      <CardContainer>
        <CardBox>
          <BlogCard title="لورم ایپسوم" imgURL={require('../../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
        </CardBox>

        <CardBox>
          <BlogCard title="لورم ایپسوم" imgURL={require('../../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
        </CardBox>
      </CardContainer>

      <CardContainer>
        <CardBox>
          <BlogCard title="لورم ایپسوم" imgURL={require('../../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
        </CardBox>

        <CardBox>
          <BlogCard title="لورم ایپسوم" imgURL={require('../../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
        </CardBox>
      </CardContainer>
    </Section>
  );
}

export default LastestPostsSection;