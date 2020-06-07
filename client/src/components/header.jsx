import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { average, getGrade, children } = props;

  return (
    <div className="bgBlue sticky-top py-4">
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <div className="py-2 col-12 order-1 col-md-6 order-md-1 d-flex justify-content-md-start justify-content-center">
          <h3
            className="name"
            onClick={() => {
              getGrade();
            }}
          >
            <Link to="/"> 🗄 Grade Table</Link>
          </h3>
        </div>

        <div className="py-2 col-12 order-2 col-md-6 order-md-2 d-flex align-items-center justify-content-md-around justify-content-center">
          <div className="d-flex">
            <h5 className="">Average Grade</h5>
            &#160;
            <span className="badge badge-secondary ">
              {isNaN(average) ? 'N/A' : average}
            </span>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
