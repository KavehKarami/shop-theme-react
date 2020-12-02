import React from 'react';
import SearchBox from '../components/blog/SearchBox';
import BtnWater from '../components/shared/buttons/BtnWater';
import Section from '../components/shared/sections/Section';

const BlogSingle = () => {
  return (
    <div className="pt-3 pt-md-100">
      <Section>
        {/* REVIEW */}
        <article className="col-12 col-md-7 col-xl-8 blog-single-post d-flex flex-column align-items-start">
          <SearchBox className="m-0 mb-4 d-lg-none d-flex justify-content-center" />
          <h1 className="title mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</h1>
          <div className="imgBx align-self-center align-self-md-start">
            <img src={require('../../assets/img/blog-post.jpg')} alt="" />
            <div className="calendar">
              <div className="day">17</div>
              <div className="month">اردیبهشت</div>
            </div>
          </div>
          <div className="description my-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </div>

          <div className="categories">
            <span>دسته بندی: </span>
            <a href="/#">تکنولوژی</a>
            <span>,</span>
            <a href="/#">برنامه نویسی</a>
          </div>

          <div className="tags">
            <span>#تگ: </span>
            <a href="/#">تکنولوژی</a>
            <span>,</span>
            <a href="/#">برنامه نویسی</a>
          </div>

          <div className="post-author">
            <div className="author-img-box">
              <img className="author-img" src={require('../../assets/img/blog-author.jpg')} alt="" />
            </div>
            <div className="author-about">
              <div className="author-name">لورم ایپسوم</div>
              <div className="author-description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</div>
            </div>
          </div>


          <div className="write-comment w-100">
            <h4 className="my-4 title text-center">نظر خود را ارسال کنید</h4>
            <form className="mx-auto">
              <div className="form-group">
                <input type="text" id="name" name="name" required />
                <label htmlFor="name">نام * </label>
              </div>

              <div className="form-group">
                <input type="text" id="family" name="family" required />
                <label htmlFor="family">نام خانوادگی * </label>
              </div>

              <div className="form-group">
                <input className="text-left direction-ltr" type="text" id="email" name="email" required />
                <label htmlFor="email">ایمیل * </label>
              </div>

              <div className="form-group">
                <textarea type="text" name="textArea" id="textArea" rows="6" required></textarea>
                <label htmlFor="textArea">نظر خود را وارد کنید * </label>
              </div>

              <button type="submit">
                ارسال
              </button>
            </form>
          </div>

          <div className="comments-section">
            <h4 className="my-4 text-center">نظرات (03)</h4>

            <div className="comment">
              <div className="intro">
                <div className="itro-img-bx">
                  <img src={require('../../assets/img/comment-1.jpg')} alt="" />
                </div>

                <div className="comment-detail">
                  <div className="person-name mb-2 font-weight-bold">لورم ایپسوم</div>
                  <div className="comment-date">18 اردیبهشت 1399 ساعت 17:32</div>
                </div>
              </div>
              <div className="comment-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
              <BtnWater parentClass="reply-btn mt-3 d-flex justify-content-start" title="پاسخ" href="/blog/single" />


              <div className="comment">
                <div className="intro">
                  <div className="itro-img-bx">
                    <img src={require('../../assets/img/comment-2.jpg')} alt="" />
                  </div>

                  <div className="comment-detail">
                    <div className="person-name mb-2 font-weight-bold">لورم ایپسوم</div>
                    <div className="comment-date">18 اردیبهشت 1399 ساعت 17:32</div>
                  </div>
                </div>
                <div className="comment-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
                <BtnWater parentClass="reply-btn mt-3 d-flex justify-content-start" title="پاسخ" href="/blog/single" />

                <div className="comment">
                  <div className="intro">
                    <div className="itro-img-bx">
                      <img src={require('../../assets/img/comment-1.jpg')} alt="" />
                    </div>

                    <div className="comment-detail">
                      <div className="person-name mb-2 font-weight-bold">لورم ایپسوم</div>
                      <div className="comment-date">18 اردیبهشت 1399 ساعت 17:32</div>
                    </div>
                  </div>
                  <div className="comment-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
                  <BtnWater parentClass="reply-btn mt-3 d-flex justify-content-start" title="پاسخ" href="/blog/single" />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* REVIEW */}
        <div className="col-12 col-md-5 col-xl-4">
          <SearchBox className="m-0 mb-3 d-none d-lg-flex" />
          <div className="categories-box">
            <div className="box-title">دسته بندی ها</div>
            <a href="/blog/single/#" className="category-item">
              <span>تکنولوژی</span>
              <span>12</span>
            </a>
            <a href="/blog/single/#" className="category-item">
              <span>برنامه نویسی</span>
              <span>43</span>
            </a>
          </div>

          <div className="archive-box">
            <div className="box-title">آرشیو مطالب</div>
            <a href="/blog/single/#" className="archive-item">
              <span>آذر 99</span>
              <span>244</span>
            </a>
            <a href="/blog/single/#" className="archive-item">
              <span>آبان 99</span>
              <span>734</span>
            </a>
          </div>





          <div className="posts-box">
            <div className="box-title">پست های مرتبط</div>
            <a href="/blog/single/#" className="post-item">
              <div className="imgBx">
                <img src={require('../../assets/img/blog-post.jpg')} alt="" />
              </div>
              <div className="detailsBx">
                <div className="title font-weight-bold">لورم ایپسوم</div>
                <div className="date-added">
                  17 اردیبهشت 99 ساعت 17:32
              </div>
              </div>
            </a>

            <a href="/blog/single/#" className="post-item">
              <div className="imgBx">
                <img src={require('../../assets/img/blog-post.jpg')} alt="" />
              </div>
              <div className="detailsBx">
                <div className="title font-weight-bold">لورم ایپسوم</div>
                <div className="date-added">
                  17 اردیبهشت 99 ساعت 17:32
              </div>
              </div>
            </a>

            <a href="/blog/single/#" className="post-item">
              <div className="imgBx">
                <img src={require('../../assets/img/blog-post.jpg')} alt="" />
              </div>
              <div className="detailsBx">
                <div className="title font-weight-bold">لورم ایپسوم</div>
                <div className="date-added">
                  17 اردیبهشت 99 ساعت 17:32
              </div>
              </div>
            </a>
          </div>


          <div className="posts-box">
            <div className="box-title">پست های محبوب</div>
            <a href="/blog/single/#" className="post-item">
              <div className="imgBx">
                <img src={require('../../assets/img/blog-post.jpg')} alt="" />
              </div>
              <div className="detailsBx">
                <div className="title font-weight-bold">لورم ایپسوم</div>
                <div className="date-added">
                  17 اردیبهشت 99 ساعت 17:32
              </div>
              </div>
            </a>

            <a href="/blog/single/#" className="post-item">
              <div className="imgBx">
                <img src={require('../../assets/img/blog-post.jpg')} alt="" />
              </div>
              <div className="detailsBx">
                <div className="title font-weight-bold">لورم ایپسوم</div>
                <div className="date-added">
                  17 اردیبهشت 99 ساعت 17:32
              </div>
              </div>
            </a>

            <a href="/blog/single/#" className="post-item">
              <div className="imgBx">
                <img src={require('../../assets/img/blog-post.jpg')} alt="" />
              </div>
              <div className="detailsBx">
                <div className="title font-weight-bold">لورم ایپسوم</div>
                <div className="date-added">
                  17 اردیبهشت 99 ساعت 17:32
              </div>
              </div>
            </a>
          </div>




        </div>
      </Section>
    </div>
  );
}

export default BlogSingle;