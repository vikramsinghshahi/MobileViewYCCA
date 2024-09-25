// import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../Common/Icons/Back';

function ParentChat() {
  const navigate = useNavigate();

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div className="i-p-header">
          <button
            className="backBtn smallFont"
            onClick={() =>
              navigate('/dashboard/chat/classes/studentList/parentList')
            }
          >
            <BackIcon /> Back
          </button>
        </div>
        <h1 className="pt-0">Chats</h1>
      </div>
    );
  };

  return (
    <>
      {header()}
      <div className={'main-content timeLinePageContent p-adjustHeight'}>
        {/* {renderCards()} */}
      </div>
    </>
  );
}

export default ParentChat;
