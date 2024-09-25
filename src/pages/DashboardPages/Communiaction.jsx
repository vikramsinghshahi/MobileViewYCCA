import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Activity1 from '../../assets/activity1.png';
import BackIcon from '../../Common/Icons/Back';
import ResetIcon from '../../Common/Icons/Reset';
import Plus from '../../Common/Icons/Plus';
import Com1 from '../../assets/com1.png';
import Com2 from '../../assets/com2.png';
import Com3 from '../../assets/com3.png';
import Com4 from '../../assets/com4.png';

function Communication() {
  const navigate = useNavigate();

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div className="i-p-header">
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/more')}
          >
            <BackIcon /> Back
          </button>
          <button
            className="addBtn"
            // onClick={() => navigate('/dashboard/activity/add')}
          >
            <Plus />
          </button>
        </div>
        <h1 className="pt-0">Communication</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <button
          className="card"
          onClick={() => navigate('/dashboard/communication/1')}
        >
          <img src={Com1} alt="Search" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/communication/2')}
        >
          <img src={Com2} alt="Search" />
        </button>
        <div className="card  ">
          <img src={Com3} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Com4} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Com4} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Com4} alt="Search" />
        </div>
      </>
    );
  };

  return (
    <>
      {header()}
      <div className={`main-content timeLinePageContent  p-adjustHeight `}>
        {renderCards()}
      </div>
    </>
  );
}

export default Communication;
