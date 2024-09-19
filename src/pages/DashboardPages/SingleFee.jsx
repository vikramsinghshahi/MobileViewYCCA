import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Fee1 from '../../assets/fee1.png';
import Fee11 from '../../assets/fee11.png';
import Fee12 from '../../assets/fee12.png';
import Fee13 from '../../assets/fee13.png';
import Fee14 from '../../assets/fee14.png';
import Fee15 from '../../assets/fee15.png';
import Fee16 from '../../assets/fee16.png';
import Fee17 from '../../assets/fee17.png';
import Fee8 from '../../assets/fee8.png';
import Fee21 from '../../assets/fee21.png';
import Fee22 from '../../assets/fee22.png';
import Fee23 from '../../assets/fee23.png';
import Fee24 from '../../assets/fee24.png';
import BackIcon from '../../Common/Icons/Back';

function SingleFee() {
  const navigate = useNavigate();
  const [isParentLogin, setUserLogin] = useState(null);
  const [feeType, setFeeType] = useState('due');

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
            <BackIcon /> Back
          </button>
        </div>
        <h1 className="pt-0">Fees</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <button className="card">
          <img src={Fee1} alt="Search" />
        </button>
        <div className="fee-btn-conatiner">
          <button
            className={feeType === 'due' && 'active'}
            onClick={() => {
              setFeeType('due');
            }}
          >
            Fee Due
          </button>
          <button
            className={feeType === 'paid' && 'active'}
            onClick={() => {
              setFeeType('paid');
            }}
          >
            Fee Paid
          </button>
        </div>
        {/* <button className="card">
          <img src="/fees.png" alt="Search" />
        </button> */}

        {feeType === 'due' ? (
          <>
            <button
              className="card"
              onClick={() => navigate('/dashboard/fees/1/fee-breakup')}
            >
              <img src={Fee11} alt="Search" />
            </button>
            <div className="card">
              <img src={Fee12} alt="Search" />
            </div>
            <div className="card">
              <img src={Fee13} alt="Search" />
            </div>
            <div className="card">
              <img src={Fee14} alt="Search" />
            </div>
            <div className="card">
              <img src={Fee15} alt="Search" />
            </div>
            <button className="card">
              <img src={Fee16} alt="Search" />
            </button>
            <div className="card">
              <img src={Fee17} alt="Search" />
            </div>
          </>
        ) : (
          <>
            <div className="card">
              <img src={Fee21} alt="Search" />
            </div>
            <div className="card">
              <img src={Fee22} alt="Search" />
            </div>
            <div className="card">
              <img src={Fee23} alt="Search" />
            </div>
            <div className="card">
              <img src={Fee24} alt="Search" />
            </div>
            <button className="card" style={{ visibility: 'hidden' }}>
              <img src={Fee16} alt="Search" />
            </button>
            <div className="card" style={{ visibility: 'hidden' }}>
              <img src={Fee17} alt="Search" />
            </div>
            <button className="card" style={{ visibility: 'hidden' }}>
              <img src={Fee16} alt="Search" />
            </button>
            <div className="card" style={{ visibility: 'hidden' }}>
              <img src={Fee17} alt="Search" />
            </div>
          </>
        )}
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

export default SingleFee;
