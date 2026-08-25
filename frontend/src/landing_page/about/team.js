import React from 'react';
function Team() {
  return (
    <div className="container p-5 ">
      <div className='row  border-top'>
        <h1 className='fs-2 text-center mt-5'>People</h1>
      </div>
      <div className='row text-muted' style={{ marginTop: "40px", padding: "0px 40px 0px 40px", lineHeight: "1.8", fontSize: "1.2em" }}>
        < div className="col p-5 text-center">
          <img src='/media/images/IMG_0032.JPG' style={{ borderRadius: "100%",height:"50%", width: "80%",objectFit:"cover" }}></img>
          <h4 className='mt-5'>LUcAsTEr</h4>
          <h6>Founder, CEO</h6>
        </div>
        < div className="col p-5">
          <p>
            LUcAsTEr founded TradeX with a simple vision to make investing
            easier, smarter, and more accessible for everyone.
          </p>

          <p>
            With a passion for technology and financial markets, the TradeX
            team is building a modern investment platform designed to help
            investors make informed decisions with confidence.
          </p>

          <p>
            At TradeX, we believe that powerful technology, transparent
            pricing, and a great user experience can make investing simpler
            for everyone.
          </p>

          <p>
            When he's not working on TradeX, LUcAsTEr enjoys exploring new
            technologies and following the latest trends in the financial
            markets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;