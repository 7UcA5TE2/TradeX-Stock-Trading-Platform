import React from 'react';
function Stats() {
  return (
    <div className='container mb-5 p-3'>
      <div className='row'>
        <div className='col mt-3 p-5'>
          <h2 className='mb-5 fs-2'>Trade with confidence</h2>
          <ul className='list-unstyled'>
            <li className="list-item mb-2">
              <h3 className='fs-4'>Simple and user-friendly</h3>
              <p className='text-muted'>Trade-X provides a clean and easy-to-use interface that makes
                investing simple for beginners and experienced investors.</p>
            </li>
            <li className="list-item mb-2">
              <h3 className='fs-4'>Fast and reliable</h3>
              <p className='text-muted'>Get real-time market information and manage your investments
                through a fast and responsive trading platform.</p>
            </li>
            <li className="list-item mb-2">
              <h3 className='fs-4'>Everything in one place</h3>
              <p className='text-muted'>Track stocks, monitor your portfolio, explore market trends,
                and manage your investments from a single platform.</p>
            </li>
            <li className="list-item">
              <h3 className='fs-4'>Make informed decisions</h3>
              <p className='text-muted'>Access useful market information and portfolio insights to
                help you make better investment decisions.</p>
            </li>
          </ul>
        </div>
        <div className='col  p-5'>
          <img src="./media/images/ecosystem.png" className="img-fluid mb-3 mt-5" alt="Hero_image" style={{ width: '85%' }} />
          <div className='text-center' >
            <a href='' className='mx-5' style={{ textDecoration: 'none' }}>Explore Trade-X< i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href='' style={{ textDecoration: 'none' }}>Start Trading <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>);
}

export default Stats;