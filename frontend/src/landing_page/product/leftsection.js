import React from 'react';
function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className='container mt-5 p-5'>
      <div className='row gap-6'>
        <div className='col'>
          <img src={imageURL} style={{ width: "550px" }}></img>
        </div>
        <div className='col ms-5 mt-5' style={{ lineHeight: "1.8", paddingLeft: "80px" }}>

          <h1 className='fs-4'>{productName}</h1>
          <p className='fs-6 text-muted'>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className='mt-3'>
            <a href={googlePlay}><img src='/media/images/googlePlayBadge.svg'></img></a>
            <a href={appStore} style={{ marginLeft: "30px" }}><img src='/media/images/appStoreBadge.svg'></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;