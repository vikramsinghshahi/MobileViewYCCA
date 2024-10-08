import DataField from '../../Common/DataField/DataField';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import BackIcon from '../../Common/Icons/Back';

function SingleAnnouncement() {
  const navigate = useNavigate();
  const [isParentLogin, setUserLogin] = useState(null);
  const options = [
    { value: 'site-one', label: 'Site One' },
    { value: 'site-two', label: 'Site Two' },
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
            onClick={() => navigate('/dashboard/announcement')}
          >
            <BackIcon /> Back
          </button>
        </div>
        {isParentLogin ? (
          <h1 className="pt-0">Happy Last Day Of School</h1>
        ) : (
          <h1 className="pt-0">Announcement</h1>
        )}

        {/* <div className="filter">
          <DataField
            optionsData={options}
            defaultValue={options[0]}
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
          <p className="text">Reset</p>
        </div> */}
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <div className="card ">
          <img src="/announc.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/announc.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/announc.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/announc.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/announc.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/announc.png" alt="Search" />
        </div>
        {/* <div className="card  ">
          <img src="/More7.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More8.png" alt="Search" />
        </div>
        <div className="card ">
          <img src="/More9.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More10.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More11.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More12.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More13.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More14.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More15.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More16.png" alt="Search" />
        </div> */}
      </>
    );
  };

  return (
    <>
      {header()}
      <div
        className={`main-content timeLinePageContent ${
          isParentLogin ? 'p-singleAnnouncement' : 'singleAnnouncement'
        }`}
      >
        {/* {renderCards()} */}
      </div>
    </>
  );
}

export default SingleAnnouncement;
