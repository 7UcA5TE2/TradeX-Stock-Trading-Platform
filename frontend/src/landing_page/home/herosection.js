import React from 'react';
function Herosection() {
  return (
    <div className="container p-5 text-center mb-5">
      <div className='row'>
        <img src="./media/images/homeHero.png" className="img-fluid mb-5" alt="Hero_image" />
        <h1 className='mt-5'>Invest smarter with Trade-X</h1>
        <p>A simple and powerful platform to invest in stocks, mutual funds, ETFs, and more. </p>
        <button type="button" className="btn btn-dark w-25  mx-auto p-2 mt-3 fs-5">Start Investing</button>
      </div>
    </div>
  );
}

export default Herosection;