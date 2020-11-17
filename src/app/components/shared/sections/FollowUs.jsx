import React from 'react';

const FollowUs = (props) => {
  return (
    <div class="follow-us">
      <div class="box">
        <a href={props.twitterId || "/#"}>
          <img src="https://i.ibb.co/D9h7fFP/twitter.png" alt="" />
        </a>
        <a href={props.instaId || "/#"}>
          <img src="https://i.ibb.co/vBbBkR9/instagram.png" alt="" />
        </a>
        <a href={props.githubId || "https://github.com/KavehKarami"}>
          <img src="https://i.ibb.co/MS8y3mg/github.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default FollowUs;