import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Activity1 from '../../assets/activity1.png';
import BackIcon from '../../Common/Icons/Back';
import ResetIcon from '../../Common/Icons/Reset';
import Plus from '../../Common/Icons/Plus';
import Gal1 from '../../assets/gal1.png';
import Gal2 from '../../assets/gal2.png';
import Gal3 from '../../assets/gal3.png';
import Gal4 from '../../assets/gal4.png';

function Gallery() {
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
        <h1 className="pt-0">Gallery</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/communication/1')}
        >
          <img src={Gal1} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/communication/2')}
        >
          <img src={Gal2} alt="Search" />
        </button>
        <div className="card ">
          <img src={Gal3} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Gal4} alt="Search" />
        </div>
        {/* <div className="card  ">
          <img src={Com4} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Com4} alt="Search" />
        </div> */}
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

export default Gallery;
