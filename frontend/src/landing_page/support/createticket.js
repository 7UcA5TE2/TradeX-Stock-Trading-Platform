import React from 'react';
function CreateTicket() {
  return (
    <div className='container mt-3 p-5'>
      <div className='row mb-5'>
        <h4>To create a ticket, select a relevant topic</h4>
      </div>
      <div className='row'>
        <div className='col'>
          <a href='' style={{ textDecoration: "none", color: "black" }}>Account Opening</a>
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
          <a href='' style={{ textDecoration: "none", color: "black" }}>Your Trade-X Account</a>
          <ul className='list-unstyled mt-4' style={{ lineHeight: "2" }}>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Login Credentials</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Account Modification and Segment Addition</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>DP ID and bank details</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Your Profile</a></li>
            <li className='item-list'><a href='' style={{ textDecoration: "none" }}>Transfer and conversion of shares</a></li>
          </ul>
        </div>
        <div className='col'>
          <a href='' style={{ textDecoration: "none", color: "black" }}>Your Trade-X Account</a>
          <ul className='list-unstyled mt-4' style={{ lineHeight: "2" }}>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Margin/leverage, Product and Ord-</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Kite Web and Mobile</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Trading FAQs</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Corporate Actions</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Sentinel</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Kite API</a></li>
            <li className='list-item'><a href='' style={{ textDecoration: "none" }}>Pi and other platforms</a></li>
          </ul>
        </div>
      </div>
    </div >
  );
}

export default CreateTicket;