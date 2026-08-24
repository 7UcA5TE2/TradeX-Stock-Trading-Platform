import React from 'react';
function Pricing() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row'>
        <div className='col-5'>
          <h1 className='mb-5 fs-2'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.</p>
          <a href='' style={{ textDecoration: 'none' }}>See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-1'></div>
        <div className='col-6 px-5 py-3'>
          <div className='row text-center'>
            <div className='col border'>
              <h1 className='mb-5 mt-4 fs-2'>$0</h1>
              <p>Free equity delivery and direct funds</p>
            </div>
            <div className='col border'>
              <h1 className='mb-5 mt-4 fs-2'>$20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing;