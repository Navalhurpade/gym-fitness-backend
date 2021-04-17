import React from "react";

function SocialButtons(props) {
  return (
    <div className="social-btns-container">
      <div className="social-btns">
        <a className="social-btn facebook" href="http://www.facebook.com">
          <i className="fa fa-facebook"></i>
        </a>
        <a className="social-btn twitter" href="http://www.twiter.com">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="social-btn instagram" href="http://www.instagram.com">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default SocialButtons;
