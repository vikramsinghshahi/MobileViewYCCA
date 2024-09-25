import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PAnnouneCard from '../../assets/PAnnouneCard.png';
import Parent1 from '../../assets/parent1.png';
import Parent2 from '../../assets/parent2.png';
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

function Parent() {
  const navigate = useNavigate();
  const [isParentLogin, setUserLogin] = useState(null);
  const options = [
    { value: 'site-one', label: 'Site One' },
    { value: 'site-two', label: 'Site Two' },
    { value: 'all', label: 'All' },
  ];

  const options2 = [
    { value: 'class-one', label: 'Class One' },
    { value: 'class-two', label: 'Class Two' },
    { value: 'all', label: 'All' },
  ];

  // Function to handle option change
  const handleSelectChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  useEffect(() => {
    const isParentLogin = localStorage.getItem('isParentLogin');
    if (isParentLogin === 'true') {
      setUserLogin(true);
    }
  }, []);

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
          {/* <button
            className="addBtn"
            onClick={() => navigate('/dashboard/announcement/add')}
          >
            <Plus />
          </button> */}
        </div>
        <h1 className="pt-0">Theresa Webb</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <div className="classesContainer">
        <button
          className="card"
          style={{ width: '100%' }}
          onClick={() =>
            navigate(
              '/dashboard/chat/classes/studentList/parentList/parentchat'
            )
          }
        >
          <img src={Parent1} alt="Search" />
        </button>
        <button
          className="card"
          style={{ width: '100%' }}
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Parent2} alt="Search" />
        </button>
        <button
          className="card"
          style={{ visibility: 'hidden' }}
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Parent2} alt="Search" />
        </button>
        <button
          className="card"
          style={{ visibility: 'hidden' }}
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Parent2} alt="Search" />
        </button>
        <button
          className="card"
          style={{ visibility: 'hidden' }}
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Parent2} alt="Search" />
        </button>
        <button
          className="card"
          style={{ visibility: 'hidden' }}
          //   onClick={() => navigate('/dashboard/announcement/2')}
        >
          <img src={Parent2} alt="Search" />
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

export default Parent;
