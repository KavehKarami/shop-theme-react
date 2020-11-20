import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';
import MailIcon from '../../shared/icons/MailIcon';
import PhoneIcon from '../../shared/icons/PhoneIcon';
import FooterContactItem from './FooterContactItem';
import FooterItemSection from './FooterItemSection';

const FooterItemContainer = () => {
  return (
    <section className="row pt-3 justify-content-md-between">
      <FooterItemSection className="col-12 col-md-4 my-4 mb-1" title="درباره ما">
        <div className="footer-items">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </div>
      </FooterItemSection>

      <FooterItemSection className="col-12 col-md-4 col-lg-3 mt-3 mb-5" title="تماس با ما">
        <FooterContactItem icon={<PhoneIcon />} href="callto:+989186948289" hrefTitle="+(98)918-694-8289" />
        <FooterContactItem icon={<MailIcon />} href="maillto:Kaveh.Karami.KK@gmail.com" hrefTitle="Kaveh.Karami.KK@gmail.com" />
      </FooterItemSection>

      <FooterItemSection className="col-6 col-md-2 mt-3 mb-5 d-none d-md-block" title="دسترسی سریع">
        <ul className="footer-items">
          {routes.map((route, index) => (
            <li key={index}>
              <Link className="text-light" to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </FooterItemSection>
    </section>
  );
}

export default FooterItemContainer;