import React from 'react';
import SearchIcon from '../components/shared/icons/SearchIcon';
import DashedInput from '../components/shared/inputs/DashedInput';
import Section from '../components/shared/sections/Section';
import BlogCard from '../components/shared/cards/BlogCard'

const Blog = () => {
  return (
    <div className="pt-3 pt-md-100">
      <Section title="آخرین پست های بلاگ" className="row my-md-4">
        <div className="col-12">
          <DashedInput className="my-3  mx-auto" iconComponent={true} rtl={true} icon={<SearchIcon />} inputType="search" placeholder="کلمه مورد نظر خود را جستجو کنید ..." />
        </div>

        <div className="col-12  d-flex flex-wrap p-0 justify-content-center justify-content-md-around">
          <BlogCard title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
          <BlogCard title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
          <BlogCard title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
          <BlogCard title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
          <BlogCard title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
          <BlogCard title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
          <BlogCard title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
          <BlogCard title="لورم ایپسوم" imgURL={require('../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
        </div>
      </Section>
    </div>
  );
}

export default Blog;