import React from 'react';
import SearchBox from '../components/blog/SearchBox';
import CategoriesAndTags from '../components/blogSingle/CategoriesAndTags';
import Comment from '../components/blogSingle/Comment';
import CommentSection from '../components/blogSingle/CommentSection';
import LinkBox from '../components/blogSingle/LinkBox';
import LinkBoxItem from '../components/blogSingle/LinkBoxItem';
import PostAuthor from '../components/blogSingle/PostAuthor';
import PostBox from '../components/blogSingle/PostBox';
import PostBoxItem from '../components/blogSingle/PostBoxItem';
import SinglePost from '../components/blogSingle/SinglePost';
import WriteComment from '../components/blogSingle/WriteComment';
import Section from '../components/shared/sections/Section';

const BlogSingle = () => {
  return (
    <div className="pt-3 pt-md-100">
      <Section>
        <article className="col-12 col-md-7 col-xl-8 blog-single-post d-flex flex-column align-items-start">
          <SearchBox className="m-0 mb-4 d-lg-none d-flex justify-content-center" />

          <SinglePost imgURL={require('../../assets/img/blog-post.jpg')} title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است." day="17" month="اردیبهشت" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." />

          <CategoriesAndTags className="categories" title="دسته بندی: " >
            <a href="/#">تکنولوژی</a>
            <span>,</span>
            <a href="/#">برنامه نویسی</a>
          </CategoriesAndTags>

          <CategoriesAndTags className="tags" title="#تگ: " >
            <a href="/#">تکنولوژی</a>
            <span>,</span>
            <a href="/#">برنامه نویسی</a>
          </CategoriesAndTags>

          <PostAuthor imgURL={require('../../assets/img/blog-author.jpg')} title="لورم ایپسوم" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" />

          <WriteComment />

          <CommentSection>
            <Comment imgURL={require('../../assets/img/comment-1.jpg')} person="لورم ایپسوم" dateTime="18 اردیبهشت 1399 ساعت 17:32" comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است" >
              <Comment imgURL={require('../../assets/img/comment-2.jpg')} person="لورم ایپسوم" dateTime="18 اردیبهشت 1399 ساعت 17:32" comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است" >
                <Comment imgURL={require('../../assets/img/comment-1.jpg')} person="لورم ایپسوم" dateTime="18 اردیبهشت 1399 ساعت 17:32" comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است" />
              </Comment>
            </Comment>
          </CommentSection>
        </article>

        <div className="col-12 col-md-5 col-xl-4">
          <SearchBox className="m-0 mb-3 d-none d-lg-flex" />

          <LinkBox className="categories-box" title="دسته بندی ها">
            <LinkBoxItem title="تکنولوژی" number="12" />
            <LinkBoxItem title="برنامه نویسی" number="43" />
          </LinkBox>

          <LinkBox isArchive={true} className="archive-box" title="آرشیو مطالب">
            <LinkBoxItem title="آذر 99" number="244" />
            <LinkBoxItem title="آبان 99" number="734" />
          </LinkBox>

          <PostBox title="پست های مرتبط">
            <PostBoxItem imgURL={require('../../assets/img/blog-post.jpg')} title="لورم ایپسوم" dateTime="17 اردیبهشت 99 ساعت 17:32" />
            <PostBoxItem imgURL={require('../../assets/img/blog-post.jpg')} title="لورم ایپسوم" dateTime="17 اردیبهشت 99 ساعت 17:32" />
            <PostBoxItem imgURL={require('../../assets/img/blog-post.jpg')} title="لورم ایپسوم" dateTime="17 اردیبهشت 99 ساعت 17:32" />
          </PostBox>

          <PostBox title="پست های محبوب">
            <PostBoxItem imgURL={require('../../assets/img/blog-post.jpg')} title="لورم ایپسوم" dateTime="17 اردیبهشت 99 ساعت 17:32" />
            <PostBoxItem imgURL={require('../../assets/img/blog-post.jpg')} title="لورم ایپسوم" dateTime="17 اردیبهشت 99 ساعت 17:32" />
            <PostBoxItem imgURL={require('../../assets/img/blog-post.jpg')} title="لورم ایپسوم" dateTime="17 اردیبهشت 99 ساعت 17:32" />
          </PostBox>
        </div>
      </Section>
    </div>
  );
}

export default BlogSingle;