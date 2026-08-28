import React from 'react';
function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col' style={{ lineHeight: "1.8", paddingLeft: "40px",paddingRight:"180px",marginTop:"130px" }}>
          <h1 className='fs-4 mb-3'>{productName}</h1>
          <p className='fs-6 text-muted'>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className='col'>
          <img src={imageURL} style={{ width: "550px" ,height:"520px" }}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;