import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function SingleFee() {
  const navigate = useNavigate();
  const [isParentLogin, setUserLogin] = useState(null);

  useEffect(() => {
    const isParentLogin = localStorage.getItem('isParentLogin');
    if (isParentLogin === 'true') {
      setUserLogin(true);
    }
  }, []);

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div>
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/fees')}
          >
            &lt; Back
          </button>
        </div>
        <h1>Fees</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <button className="card">
          <img src="/fee1.png" alt="Search" />
        </button>
        {/* <button className="card">
          <img src="/fees.png" alt="Search" />
        </button> */}
        <div className="card">
          <img src="/fee8.png" alt="Search" />
        </div>
        <div className="card">
          <img src="/fee2.png" alt="Search" />
        </div>
        <div className="card">
          <img src="/fee3.png" alt="Search" />
        </div>
        <div className="card">
          <img src="/fee4.png" alt="Search" />
        </div>
        <div className="card">
          <img src="/fee5.png" alt="Search" />
        </div>
        <div className="card">
          <img src="/fee6.png" alt="Search" />
        </div>
        <div className="card">
          <img src="/fee7.png" alt="Search" />
        </div>
      </>
    );
  };

  return (
    <>
      {header()}
      <div
        className={`main-content timeLinePageContent ${
          isParentLogin ? 'p-adjustHeight' : 'adjustHeight'
        }`}
      >
        {renderCards()}
      </div>
    </>
  );
}

export default SingleFee;
