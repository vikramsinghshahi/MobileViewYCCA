import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PAnnouneCard from '../../assets/PAnnouneCard.png';
import Class1 from '../../assets/class1.png';
import Class2 from '../../assets/class2.png';
import Class3 from '../../assets/class3.png';
import Class4 from '../../assets/class4.png';
import Class5 from '../../assets/class5.png';
import BackIcon from '../../Common/Icons/Back';

function Classes() {
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
            onClick={() => navigate('/dashboard/chat/add')}
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
        <h1 className="pt-0">Classes</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <div className="classesContainer">
        <button
          className="card"
          onClick={() => navigate('/dashboard/chat/classes/studentList')}
        >
          <img src={Class1} alt="Search" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/chat/classes/studentList')}
        >
          <img src={Class2} alt="Search" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/chat/classes/studentList')}
        >
          <img src={Class3} alt="Search" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/chat/classes/studentList')}
        >
          <img src={Class4} alt="Search" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/chat/classes/studentList')}
        >
          <img src={Class5} alt="Search" />
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

export default Classes;
