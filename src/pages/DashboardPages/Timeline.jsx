import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import Tcard1 from '../../assets/tcard1.png';
import Tcard2 from '../../assets/tcard2.png';
import Tcard3 from '../../assets/tcard3.png';
import Tcard4 from '../../assets/tcard4.png';
import Tcard5 from '../../assets/tcard5.png';
import Tcard6 from '../../assets/tcard6.png';
import Tcard7 from '../../assets/tcard7.png';
import Tcard8 from '../../assets/tcard8.png';
import Tcard9 from '../../assets/tcard9.png';
import Tcard10 from '../../assets/tcard10.png';
import Tcard11 from '../../assets/tcard11.png';
import Tcard12 from '../../assets/tcard12.png';
import ResetIcon from '../../Common/Icons/Reset';

function Timeline() {
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
              optionsData={options2}
              defaultValue={options2[0]}
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
        <div className="card ">
          <img src={Tcard7} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard8} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard9} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard10} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard11} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Tcard12} alt="Search" />
        </div>
        <div className="card  " style={{ visibility: 'hidden' }}>
          {/* <img src="/More7.png" alt="Search" /> */}
        </div>
        <div className="card  " style={{ visibility: 'hidden' }}>
          {/* <img src="/More7.png" alt="Search" /> */}
        </div>
        <div className="card  " style={{ visibility: 'hidden' }}>
          {/* <img src="/More7.png" alt="Search" /> */}
        </div>
        <div className="card  " style={{ visibility: 'hidden' }}>
          {/* <img src="/More7.png" alt="Search" /> */}
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
