import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Fee1 from '../../assets/fee1.png';
import Fee11 from '../../assets/fee11.png';
import Fee12 from '../../assets/fee12.png';
import Fee13 from '../../assets/fee13.png';
import Fee14 from '../../assets/fee14.png';
import Fee18 from '../../assets/fee18.png';
import Fee19 from '../../assets/fee19.png';
import Fee20 from '../../assets/fee20.png';
import Fee8 from '../../assets/fee8.png';
import BackIcon from '../../Common/Icons/Back';

function FeeBreakUp() {
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
            onClick={() => navigate('/dashboard/fees/:id')}
          >
            <BackIcon /> Back
          </button>
        </div>
        <h1 className="pt-0">Fee Break Up</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <button className="card">
          <img src={Fee18} alt="Search" />
        </button>
        {/* <div className="fee-btn-conatiner">
          <button className="active">Fee Due</button>
          <button>Fee Paid</button>
        </div> */}
        {/* <button className="card">
          <img src="/fees.png" alt="Search" />
        </button> */}
        <div className="card">
          <img src={Fee19} alt="Search" />
        </div>
        <div className="card">
          <img src={Fee20} alt="Search" />
        </div>
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src={Fee11} alt="Search" />
        </div>
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src={Fee12} alt="Search" />
        </div>
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src={Fee13} alt="Search" />
        </div>
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src={Fee14} alt="Search" />
        </div>
        {/* <div className="card">
          <img src={Fee15} alt="Search" />
        </div> */}
        {/* <div className="card">
          <img src={Fee16} alt="Search" />
        </div> */}
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

export default FeeBreakUp;
