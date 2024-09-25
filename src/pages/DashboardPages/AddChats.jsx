import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PAnnouneCard from '../../assets/PAnnouneCard.png';
import SiteOne from '../../assets/siteOne.png';
import Announc from '../../assets/announc.png';
import BackIcon from '../../Common/Icons/Back';
import ResetIcon from '../../Common/Icons/Reset';

import Plus from '../../Common/Icons/Plus';

function AddChats() {
  const navigate = useNavigate();

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div className="i-p-header">
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/chats')}
          >
            <BackIcon /> Back
          </button>
          <button
            className="addBtn"
            onClick={() => navigate('/dashboard/announcement/add')}
          >
            <Plus />
          </button>
        </div>
        <h1 className="pt-0">Select Site</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <button
          className="card"
          onClick={() => navigate('/dashboard/chat/classes')}
        >
          <img src={SiteOne} alt="Search" />
        </button>
      </>
    );
  };

  return (
    <>
      {header()}
      <div
        className={'main-content timeLinePageContent p-adjustHeight'}
        style={{ alignItems: 'flex-start' }}
      >
        {renderCards()}
      </div>
    </>
  );
}

export default AddChats;
