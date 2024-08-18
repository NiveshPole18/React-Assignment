import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '20px', marginTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div>
          <h4>Abstract</h4>
          <p>Branches</p>
        </div>
        <div>
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div>
          <h4>Community</h4>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribbble</p>
          <p>Podcast</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;