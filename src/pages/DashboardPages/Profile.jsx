import DataField from '../../Common/DataField/DataField';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Profile() {
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
            onClick={() => navigate('/dashboard/more')}
          >
            &lt; More
          </button>
        </div>
        <h1>Profile</h1>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        {isParentLogin ? (
          <>
            <button className="card">
              <img src="/p-profile1.png" alt="Search" />
            </button>
            <div className="card">
              <img src="/p-profile4.png" alt="Search" />
            </div>
            <button className="card">
              <img src="/p-profile2.png" alt="Search" />
            </button>
            <div className="card">
              <img src="/p-profile3.png" alt="Search" />
            </div>
          </>
        ) : (
          <>
            <button className="card">
              <img src="/p-admin1.png" alt="Search" />
            </button>
            <div className="card">
              <img src="/p-admin3.png" alt="Search" />
            </div>
            <button className="card">
              <img src="/p-admin2.png" alt="Search" />
            </button>
          </>
        )}
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src="/chat4.png" alt="Search" />
        </div>
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src="/chat5.png" alt="Search" />
        </div>
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src="/chat5.png" alt="Search" />
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
          isParentLogin ? 'p-adjustHeight' : 'a-adjustHeight'
        }`}
      >
        {renderCards()}
      </div>
    </>
  );
}

export default Profile;
