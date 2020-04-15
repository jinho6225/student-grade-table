import React from 'react';

const Header = props => {
  const { average } = props;

  return (
    <div className="bgBlue sticky-top py-4">
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <div className="py-2 col-12 order-1 col-md-8 order-md-1 d-flex justify-content-md-start justify-content-center">
          <h3>🗄 Grade Table</h3>
        </div>

        <div className="py-2 col-12 order-2 col-md-4 order-md-2 d-flex align-items-center justify-content-md-end justify-content-center">
          <h5 className="">Average Grade</h5>
          &#160;
          <span className="badge badge-secondary ">
            {isNaN(average) ? 'N/A' : average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
