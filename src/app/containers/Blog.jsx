import React from 'react';
import Section from '../components/shared/sections/Section';
import SearchBox from '../components/blog/SearchBox';
import BlogItems from '../components/blog/BlogItems';
import Pagination from '../components/blog/Pagination';

const Blog = () => {
  return (
    <div className="pt-3 pt-md-100">
      <Section title="آخرین پست های بلاگ" className="row my-md-4">
        <SearchBox />
        <BlogItems />
        <Pagination />
      </Section>
    </div>
  );
}

export default Blog;