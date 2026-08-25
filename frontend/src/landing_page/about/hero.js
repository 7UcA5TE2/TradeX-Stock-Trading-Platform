import React from 'react';
function HeroSection() {
  return (
    <div className="container p-5 mt-5">
      <div className='row mt-5 mb-5'>
        <h1 className='fs-2 text-center'>  Investing made simple with TradeX.<br />
          Powerful technology for smarter trading.</h1>
      </div>
      <hr />
      <div className='row text-muted' style={{ marginTop: "80px", padding: "0px 40px 0px 40px", lineHeight: "1.8", fontSize: "1.2em" }}>
        < div className="col p-5">
          <p>
            TradeX was built with a simple goal to make investing and
            trading easier, more transparent, and accessible to everyone.
            We believe that financial technology should remove complexity,
            not add to it.
          </p>

          <p>
            Our platform brings together a clean user experience, powerful
            trading tools, and real-time market information to help traders
            and investors manage their investments with confidence.
          </p>

          <p>
            Whether you are taking your first steps into the stock market
            or actively managing your portfolio, TradeX provides the tools
            you need to discover opportunities and make informed decisions.
          </p>
        </div>
        < div className="col p-5">
          <p>
            At TradeX, technology is at the heart of everything we build.
            From fast and reliable order execution to intuitive charts and
            portfolio tracking, we are constantly improving the platform
            to create a better investing experience.
          </p>

          <p>
            We believe in transparent pricing, simple products, and
            investor-first design. Our mission is to make the financial
            markets easier to understand and easier to access.
          </p>

          <p>
            And we are just getting started. TradeX continues to evolve
            every day as we build new features, improve our technology,
            and work toward creating a modern trading platform for the
            next generation of investors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;