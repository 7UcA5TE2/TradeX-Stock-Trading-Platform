import React from 'react';

function Universe() {
  return (
    <div className='container' style={{ marginTop: "100px", marginBottom: "80px", padding: "0 80px 0 80px" }}>
      <div className='row text-center text-muted'>
        <h1 className='fs-3 mb-3'>The Trade-X Universe</h1>
        <p className='fs-6 '>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      <div className='row mt-5'>
        <div className='col-4 text-muted fs-6 text-center px-5'>
          <img src='/media/images/zerodhaFundhouse.png' style={{ width: "80%", height: "37%" }} className='mb-3' ></img>
          <p style={{ fontSize: "small" }}>A simple and transparent platform designed to help you invest smartly and achieve your financial goals..</p>
        </div>
        <div className='col-4 text-muted fs-6 text-center px-5'>
          <img src='/media/images/sensibullLogo.svg' style={{ width: "90%", height: "37%" }} className='mb-3'></img>
          <p style={{ fontSize: "small" }}>An advanced options trading platform that helps you build strategies, analyze positions, and make informed decisions.</p>
        </div>
        <div className='col-4 text-muted fs-6 text-center px-5'>
          <img src='/media/images/goldenpiLogo.png' style={{ width: "70%", height: "37%" }} className='mb-3'></img>
          <p style={{ fontSize: "small" }}>A powerful investment research platform providing insights into stocks, sectors, market trends, and financial data.</p>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-4 text-muted fs-6 text-center px-5'>
          <img src='/media/images/streakLogo.png' style={{ width: "70%", height: "38%" }} className='mb-3' ></img>
          <p style={{ fontSize: "small" }}>A systematic trading platform that lets you create, test, and execute trading strategies with ease.</p>
        </div>
        <div className='col-4 text-muted fs-6 text-center px-5'>
          <img src='/media/images/smallcaseLogo.png' style={{ width: "85%", height: "37%" }} className='mb-3'></img>
          <p style={{ fontSize: "small" }}>A thematic investing platform that makes it easy to invest in diversified baskets based on your interests and goals.</p>
        </div>
        <div className='col-4 text-muted fs-6 text-center px-5'>
          <img src='/media/images/dittoLogo.png' style={{ width: "60%", height: "37%" }} className='mb-3'></img>
          <p style={{ fontSize: "small" }}>A simple platform providing personalized guidance to help you make better and more informed financial decisions.</p>
        </div>
      </div>
      <div className='text-center mt-5'>
        <button type="button" className="btn btn-dark w-25  mx-auto p-2 mt-3 fs-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;

