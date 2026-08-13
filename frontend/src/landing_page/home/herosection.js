import React from 'react';
function Herosection() {
  return (
    <div className="container p-5 text-center mb-5">
      <div className='row'>
        <img src="./media/images/homeHero.png" className="img-fluid mb-5" alt="Hero_image" />
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform for invest in stocks, derivatives, mutual funds, and more </p>
        <button type="button" className="btn btn-dark w-25  mx-auto p-2 mt-3 fs-5">Signup now</button>
      </div>
    </div>
  );
}

export default Herosection;