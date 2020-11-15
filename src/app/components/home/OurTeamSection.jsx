import React from 'react';
import CardBox from '../shared/card/CardBox';
import CardContainer from '../shared/card/CardContainer';
import Section from '../shared/Section';
import OurTeamCard from '../shared/cards/OurTeamCard';

const OurTeamSection = () => {
  return (
    <Section title="برخی از نمونه کار های ما">
      <CardContainer className="col-12 col-sm-4" boxClass="row flex-sm-column flex-lg-row">
        <CardBox className="col-12 col-sm-12 col-lg-6 card-box" >
          <OurTeamCard person="کاوه کرمی" position="برنامه نویس" imgURL={require('../../../assets/img/team.jpg')} />
        </CardBox>

        <CardBox className="col-12 col-sm-12 col-lg-6 card-box">
          <OurTeamCard person="کاوه کرمی" position="برنامه نویس" imgURL={require('../../../assets/img/team.jpg')} />
        </CardBox>
      </CardContainer>

      <CardContainer className="col-12 col-sm-4" boxClass="row flex-sm-column flex-lg-row">
        <CardBox className="col-12 col-sm-12 col-lg-6 card-box">
          <OurTeamCard person="کاوه کرمی" position="برنامه نویس" imgURL={require('../../../assets/img/team.jpg')} />
        </CardBox>

        <CardBox className="col-12 col-sm-12 col-lg-6 card-box">
          <OurTeamCard person="کاوه کرمی" position="برنامه نویس" imgURL={require('../../../assets/img/team.jpg')} />
        </CardBox>
      </CardContainer>

      <CardContainer className="col-12 col-sm-4" boxClass="row flex-sm-column flex-lg-row">
        <CardBox className="col-12 col-sm-12 col-lg-6 card-box">
          <OurTeamCard person="کاوه کرمی" position="برنامه نویس" imgURL={require('../../../assets/img/team.jpg')} />
        </CardBox>

        <CardBox className="col-12 col-sm-12 col-lg-6 card-box">
          <OurTeamCard person="کاوه کرمی" position="برنامه نویس" imgURL={require('../../../assets/img/team.jpg')} />
        </CardBox>
      </CardContainer>
    </Section>
  );
}

export default OurTeamSection;