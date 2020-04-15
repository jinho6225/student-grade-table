import React from 'react';

const Header = props => {
  const { average } = props;

  return (
    <div className="bg-warning sticky-top py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center col col-11 order-1 col-lg-8 order-lg-1">
          <h3>🗄📁 Student Grade Table</h3>
        </div>
        <div className="d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center col col-11 order-2 col-lg-4 order-lg-2">
          <h4 className="d-flex align-items-center">
            <span className="mr-2">Average Grade</span>
            <span className="badge badge-secondary ">
              {isNaN(average) ? 'N/A' : average}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
