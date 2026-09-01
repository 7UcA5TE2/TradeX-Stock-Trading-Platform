import React from 'react';
function Herosection() {
  return (
    <div className='container-fluid p-5 mt-5 bg-dark'>
      <div className='row mx-5 ps-5'>
        <div className='col px-5'>
          <h4 className='text-light mb-5 fs-5'>Support Portal</h4>
          <div>
            <label className="text-light mb-3 fs-5" for="search">Search for an answer or browse help topics
              to create a ticket</label>
            <input style={{ width: "100%", height: "60px", borderRadius: ".5rem", padding: "1rem", fontSize: "0.7rem" }} type="search" placeholder='Eg: how do i activate F&O, why is my order getting rejected ..' name="" id="search" n></input>
          </div>
          <div className='row mt-3' style={{ fontSize: "0.5rem" }}>
            <a href='' className='col-4 text-light '>Track account opening</a>
            <a href='' className='col-4 text-light '>Track segment activation</a>
            <a href='' className='col-4 text-light '>Intraday</a>
            <a href='' className='col-4 text-light '>margins </a>
            <a href='' className='col-4 text-light '>Kite user manual</a>
          </div>
        </div>
        <div className='col px-5' style={{ marginLeft: "9rem" }}>
          <a href='' className='mt-5 text-light' style={{ marginLeft: "14rem" }}>Track Ticket</a>
          <h4 className='text-light fs-5 mt-5 mb-3'>Featured</h4>
          <ol className='text-light list'>
            <li className='list-item mt-2'><a href='' className='text-light small'>Current Takeovers and Delisting - January 2024</a></li>
            <li className='list-item mt-2'><a href='' className='text-light small'>Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </div>

  );
}

export default Herosection;