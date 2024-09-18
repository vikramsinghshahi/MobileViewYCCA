import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import Tcard1 from '../../assets/tcard1.png';
import Tcard2 from '../../assets/tcard2.png';
import Tcard3 from '../../assets/tcard3.png';
import Tcard4 from '../../assets/tcard4.png';
import Tcard5 from '../../assets/tcard5.png';
import Tcard6 from '../../assets/tcard6.png';
import ResetIcon from '../../Common/Icons/Reset';

function Timeline() {
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
        <h1>Timeline</h1>
        {!isParentLogin && (
          <div className="filter">
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
            <p className="text">
              <ResetIcon />
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <div className="card ">
          <img src={Tcard1} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard2} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard3} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard4} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard5} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard6} alt="Search" />
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
          isParentLogin && 'p-timeLinePageContent'
        }`}
      >
        {renderCards()}
      </div>
    </>
  );
}

export default Timeline;
