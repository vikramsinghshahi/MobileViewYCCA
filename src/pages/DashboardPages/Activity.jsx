import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Activity1 from '../../assets/activity1.png';
import BackIcon from '../../Common/Icons/Back';
import ResetIcon from '../../Common/Icons/Reset';

function Activity() {
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
        <div>
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/more')}
          >
            <BackIcon /> Back
          </button>
        </div>
        <h1 className="pt-0">Activity</h1>
        {!isParentLogin && (
          <div className="filter">
            <DataField
              optionsData={options2}
              defaultValue={options2[0]}
              label=""
              onChange={handleSelectChange}
              className="custom-select"
            />
            <DataField
              optionsData={options}
              defaultValue={options[0]}
              label=""
              onChange={handleSelectChange}
              className="custom-select"
            />
            <p className="text">
              <ResetIcon /> Reset
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <button
          className="card"
          onClick={() => navigate('/dashboard/activity/1')}
        >
          <img src={Activity1} alt="Search" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/activity/2')}
        >
          <img src={Activity1} alt="Search" />
        </button>
        <div className="card  ">
          <img src={Activity1} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Activity1} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Activity1} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Activity1} alt="Search" />
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

export default Activity;
