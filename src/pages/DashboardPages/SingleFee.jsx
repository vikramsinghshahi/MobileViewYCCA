import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Fee1 from '../../assets/fee1.png';
import Fee2 from '../../assets/fee2.png';
import Fee3 from '../../assets/fee3.png';
import Fee4 from '../../assets/fee4.png';
import Fee5 from '../../assets/fee5.png';
import Fee6 from '../../assets/fee6.png';
import Fee7 from '../../assets/fee7.png';
import Fee8 from '../../assets/fee8.png';

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
          <img src={Fee1} alt="Search" />
        </button>
        {/* <button className="card">
          <img src="/fees.png" alt="Search" />
        </button> */}
        <div className="card">
          <img src={Fee8} alt="Search" />
        </div>
        <div className="card">
          <img src={Fee2} alt="Search" />
        </div>
        <div className="card">
          <img src={Fee3} alt="Search" />
        </div>
        <div className="card">
          <img src={Fee4} alt="Search" />
        </div>
        <div className="card">
          <img src={Fee5} alt="Search" />
        </div>
        <div className="card">
          <img src={Fee6} alt="Search" />
        </div>
        <div className="card">
          <img src={Fee7} alt="Search" />
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
