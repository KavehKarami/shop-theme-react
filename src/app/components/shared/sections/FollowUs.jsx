import React from 'react';

const FollowUs = (props) => {
  return (
    <div className="follow-us">
      <div className="box">
        <a href={props.twitterId || "/#"}>
          <img src={require('../../../../assets/img/twitter.png')} alt="" />
        </a>
        <a href={props.instaId || "/#"}>
          <img src={require('../../../../assets/img/instagram.png')} alt="" />
        </a>
        <a href={props.githubId || "https://github.com/KavehKarami"}>
          <img src={require('../../../../assets/img/github.png')} alt="" />
        </a>
      </div>
    </div>
  );
}

export default FollowUs;