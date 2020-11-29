import React from 'react';

const Pagination = () => {
  return (
    <div className="blog-pagination d-flex flex-row-reverse justify-content-center align-items-center w-100 mt-5">
      <a href="/blog" className="pagination-item ">قبلی</a>
      <a href="/blog" className="pagination-item active">1</a>
      <a href="/blog" className="pagination-item ">2</a>
      <a href="/blog" className="pagination-item ">3</a>
      <a href="/blog" className="pagination-item ">4</a>
      <a href="/blog" className="pagination-item ">بعدی</a>
    </div>
  );
}

export default Pagination;