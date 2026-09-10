import React from 'react';
function CreateTicket() {
  return (
    <div className='container mt-3 p-5'>
      <div className='row mb-5'>
        <h4>To create a ticket, select a relevant topic</h4>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <h5><a href='' style={{ textDecoration: "none", color: "black" }}><i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</a></h5>
          <ul className='list-unstyled mt-4' style={{ lineHeight: "2" }}>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Online Account Opening</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Offline Account Opening</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Company, Partnership and HUF Account Opening</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>NRI Account Opening</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Charges at Zerodha</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
          </ul>
        </div>
        <div className='col'>
          <h5><a href='' style={{ textDecoration: "none", color: "black" }}><i className="fa fa-user" aria-hidden="true"></i> Your Trade-X Account</a></h5>
          <ul className='list-unstyled mt-4' style={{ lineHeight: "2" }}>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Login Credentials</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Account Modification and Segment Addition</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>DP ID and bank details</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Your Profile</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Transfer and conversion of shares</a></li>
          </ul>
        </div>
        <div className='col'>
          <h5><a href='' style={{ textDecoration: "none", color: "black" }}><i className="fa fa-bar-chart" aria-hidden="true"></i> Your Trade-X Account</a></h5>
          <ul className='list-unstyled mt-4' style={{ lineHeight: "2" }}>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Margin/leverage, Product and Order-types</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Kite Web and Mobile</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Trading FAQs</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Corporate Actions</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Sentinel</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Kite API</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Pi and other platforms</a></li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h5><a href='' style={{ textDecoration: "none", color: "black" }}><i className="fa fa-credit-card" aria-hidden="true"></i> Funds</a></h5>
          <ul className='list-unstyled mt-4' style={{ lineHeight: "2" }}>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Adding Funds</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Fund Withdrawal</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>eMandates</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Adding Bank Accounts</a></li>
          </ul>
        </div>
        <div className='col'>
          <h5><a href='' style={{ textDecoration: "none", color: "black" }}><i className="fa fa-circle-o-notch" aria-hidden="true"></i> Console</a></h5>
          <ul className='list-unstyled mt-4' style={{ lineHeight: "2" }}>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Reports</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Ledger</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Portfolio</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>60 Day Challenge</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>IPO</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Referral Program</a></li>
          </ul>
        </div>
        <div className='col'>
          <h5><a href='' style={{ textDecoration: "none", color: "black" }}><i className="fa fa-circle-thin" aria-hidden="true"></i> Coin</a></h5>
          <ul className='list-unstyled mt-4' style={{ lineHeight: "2" }}>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Understanding Mutual Fur</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>About Coin</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Buying and Selling th</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Starting an SIP</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Managing your Portfo.</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Coin App</a></li>
          </ul>
        </div>
      </div>
    </div >
  );
}

export default CreateTicket;