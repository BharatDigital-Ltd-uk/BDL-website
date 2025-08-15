import React from 'react';
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

const Footer = () => {
  return (
    <>
      {/* Visible only on medium and larger screens */}
      <div className="d-none d-md-block">
        <FooterDesktop />
      </div>

      {/* Visible only on small (mobile) screens */}
      <div className="d-block d-md-none">
        <FooterMobile />
      </div>
    </>
  );
};

export default Footer;
