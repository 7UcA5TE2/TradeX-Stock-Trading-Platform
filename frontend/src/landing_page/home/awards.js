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
            <h2>Largest stock broker in India</h2>
            <p>2+ million Trade-X Clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
          </div>

          <div className='row'>

            <div className='col'>
              <ul className="list">
                <li className="list-item mb-2">Futures and options</li>
                <li className="list-item mb-2">Commodity derivatives</li>
                <li className="list-item mb-2">Currency derivatives</li>
              </ul>
            </div>

            <div className='col mb-5'>
              <li className="list-item mb-2">Stocks and IPOs</li>
              <li className="list-item mb-2">Direct mutual funds</li>
              <li className="list-item mb-2">Bonds and Govt. Securities</li>
            </div>

            <img src="./media/images/Presslogos.png" className="img-fluid mb-5" alt="Hero_image" style={{ width: "90%" }} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;