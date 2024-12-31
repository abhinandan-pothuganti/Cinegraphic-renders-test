import React from 'react';
import './Header.css';

const Header = () => (
  <div className="bg-white mt-16" id="home">
    <div className="embed-container">
    <iframe
  src="https://www.youtube.com/embed/ysbShvnA7Bg?si=35Ewai7l6j0Sm3iy&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;playlist=ysbShvnA7Bg"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

    </div>
  </div>
);

export default Header;
