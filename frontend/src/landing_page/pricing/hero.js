import React from 'react';
function HeroSection() {
  return (
    <div className='container py-5 px-4 mt-5 ' style={{ marginBottom: "50px" }}>
      <div className=' row mt-5 text-center' style={{ lineHeight: "1.8" }}>
        <h1 className='fs-2'>Pricing</h1>
        <p className='fs-6 text-muted' style={{ lineHeight: "1.8" }}>Free equity investments and flat ₹20 traday and F&O trades</p>
        <hr className='mt-5 ' />
      </div>
      <div className=' row mt-5' style={{}}>
        <div className='col-4 text-center'>
          <img src='media/images/pricing0.svg' style={{ width: "75%", objectFit: "cover" }}></img>
          <h2 className='fs-3 text-muted mb-4 mt-4'>Free equity delivery</h2>
          <p className='fs-6 text-muted' style={{ lineHeight: "1.8" }}>All equity delivery investments (NSE, BSE),
            are absolutely free - ₹ 0 brokerage.
          </p>
        </div>
        <div className='col-4 text-center'>
          <img src='media/images/intradayTrades.svg' style={{ width: "75%", objectFit: "cover" }}></img>
          <h2 className='fs-3 text-muted mb-4 mt-4'>Intraday and F&O trades</h2>
          <p className='fs-6 text-muted' style={{ lineHeight: "1.8" }}>Flat Rs. 20 or 0.03% (whichever is lower)
            per executed order on intraday trades
            across equity, currency, and commodity
            trades.</p>
        </div>
        <div className='col-4 text-center'>
          <img src='media/images/pricing0.svg' style={{ width: "75%", objectFit: "cover" }}></img>
          <h2 className='fs-3 text-muted mb-4 mt-4'>Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely
            free -₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;