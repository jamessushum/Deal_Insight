import React from 'react';

const Footer = () => {

  return (
    <div className="col-sm main__footer">
      <span className="main__footer-text">
        &copy;{new Date().getFullYear()} James Su-Shum | Nashville Software School - Cohort 41
      </span>
    </div>
  )
}

export default Footer;