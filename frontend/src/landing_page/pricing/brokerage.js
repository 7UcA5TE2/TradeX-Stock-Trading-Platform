import React from 'react';
function BrokeRage() {
  return (
    <div className='container p-5 mb-3'>
      <div className=' row mt-5' style={{}}>
        <div className='col-8'>
          <a href='' style={{ textDecoration: "none" }}><h2 className='text-center fs-4'>Brokerage calculator</h2></a>
          <ul className='list text-muted mt-5' style={{ lineHeight: "1.8" }}>
            <li className='list-item fs-6'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li className='list-item fs-6'>Digital contract notes will be sent via e-mail.</li>
            <li className='list-item fs-6'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li className='list-item fs-6'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li className='list-item fs-6'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li className='list-item fs-6'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
          </ul>
        </div>
        <div className='col-4 text-center'>
          <a href='' style={{ textDecoration: "none" }}><h2 className='text-center fs-4'>List of charges</h2></a>
        </div>
      </div>
    </div>
  );
}

export default BrokeRage;