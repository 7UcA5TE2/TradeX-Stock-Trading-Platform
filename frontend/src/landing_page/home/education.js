import React from 'react';
function Education() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col p-5'>
          <img src="./media/images/education.svg" className="img-fluid mb-5" alt="Hero_image" />
        </div>
        <div className='col p-5'>
          <div className='row'>
            <h2 className='fs-2 mb-4'>Learn. Trade. Grow.</h2>
            <p>TradeX makes stock market learning simple. Explore
              beginner-friendly guides, market concepts, and trading
              strategies to build your investment knowledge.</p>
            <a href='' style={{ textDecoration: 'none' }}>Explore TradeX Academy <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <p className='mt-5'>Stay connected with fellow traders, discuss market trends,
              share ideas, and get answers to your trading and investment
              questions.</p>
            <a href='' style={{ textDecoration: 'none' }}>Join the TradeX Community<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Education;