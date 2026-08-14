import React from 'react';
function Awards() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col p-5'>
          <img src="./media/images/largestBroker.svg" className="img-fluid mb-5" alt="Hero_image" />
        </div>
        <div className='col p-5'>
          <div className='row mb-5 mt-3'>
            <h2>Everything you need to invest</h2>
            <p>Trade-X brings essential investment tools together in one
              platform, helping users explore, track, and manage their
              investments with ease.</p>
          </div>
          <div className='row'>
            <div className='col'>
              <ul className="list">
                <li className="list-item mb-2">Stock Trading</li>
                <li className="list-item mb-2">Market Analysis</li>
                <li className="list-item mb-2">Portfolio Tracking</li>
              </ul>
            </div>
            <div className='col mb-5'>
              <ul className="list">
                <li className="list-item mb-2">Mutual Funds</li>
                <li className="list-item mb-2">IPO Investments</li>
                <li className="list-item mb-2">Investment Insights</li>
              </ul>
            </div>
            <img src="./media/images/Presslogos.png" className="img-fluid mb-5" alt="Hero_image" style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Awards;