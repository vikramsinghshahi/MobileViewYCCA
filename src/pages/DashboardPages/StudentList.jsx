import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Student1 from '../../assets/student1.png';
import Student2 from '../../assets/student2.png';
import Student3 from '../../assets/student3.png';
import Student4 from '../../assets/student4.png';
import Student5 from '../../assets/student5.png';
import Student6 from '../../assets/student6.png';
import Student7 from '../../assets/student7.png';
import Student8 from '../../assets/student8.png';
import Student9 from '../../assets/student9.png';
import Student10 from '../../assets/student10.png';
import Student11 from '../../assets/student11.png';
import Student12 from '../../assets/student12.png';
import Student13 from '../../assets/student13.png';
import Student14 from '../../assets/student14.png';
import BackIcon from '../../Common/Icons/Back';

function StudentList() {
  const navigate = useNavigate();

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div className="i-p-header">
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/chat/classes')}
          >
            <BackIcon /> Back
          </button>
        </div>
        <h1 className="pt-0">Student List</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <div className="classesContainer">
        <button
          className="card"
          onClick={() =>
            navigate('/dashboard/chat/classes/studentList/parentList')
          }
        >
          <img src={Student1} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student2} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student3} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student4} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student5} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student6} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student7} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student8} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student9} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student10} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student11} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student12} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student13} alt="Search" />
        </button>
        <button
          className="card"
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Student14} alt="Search" />
        </button>
      </div>
    );
  };

  return (
    <>
      {header()}
      <div className={'main-content timeLinePageContent p-adjustHeight'}>
        {renderCards()}
      </div>
    </>
  );
}

export default StudentList;
