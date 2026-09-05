import React from 'react';
function CreateTicket() {
  return (
    <div className='container mt-3 p-5'>
      <div className='row'>
        <h4>To create a ticket, select a relevant topic</h4>
      </div>
      <div className='row'>
        <div className='col'>

          <a href='' style={{ textDecoration: "none", color: "black" }}>Account Opening</a>
          <ul className='list'>
            <li>Online Account Opening</li>

            <li>Offline Account Opening</li>

            <li>Company, Partnership and HUF Account
              Opening</li>

            <li>NRI Account Opening</li>

            <li>Charges at Zerodha</li>

            <li>Zerodha IDFC FIRST Bank 3-in-1 Account</li>
          </ul>
        </div>
        <div className='col'>
          <a href='' style={{ textDecoration: "none", color: "black" }}>Your Trade-X Account</a>

        </div>
        <div className='col'>
          <a href='' style={{ textDecoration: "none", color: "black" }}>Your Trade-X Account</a>

        </div>
      </div>

    </div>
  );
}

export default CreateTicket;