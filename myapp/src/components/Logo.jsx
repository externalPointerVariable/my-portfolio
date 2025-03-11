import React from 'react';
import logo from '../assets/profile/images/ProfileLogo.png';

function Logo({ className }) {
  return (
      <img src={logo} alt="Protfolio Logo" className={className}/>
  );
}

export default Logo;