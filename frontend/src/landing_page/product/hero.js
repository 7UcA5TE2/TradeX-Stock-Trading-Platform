import React from 'react';
import {Link} from "react-router-dom";
function HeroSection() {
  return (
    <div className='container p-5 mt-5'>
      <div className='mt-5 text-center'style={{lineHeight:"1.8"}}>
        <h1 className='fs-2'>Trade-X Products</h1>
        <h4 className='fs-5 text-muted'>Sleek, modern, and intuitive trading platforms</h4>
        <p>check out our <Link style={{textDecoration:"none"}}>investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
      </div>
    </div>
  );
}

export default HeroSection;