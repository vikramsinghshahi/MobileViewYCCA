import DataField from '../../Common/DataField/DataField';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PProfile1 from '../../assets/p-profile1.png';
import PProfile2 from '../../assets/p-profile2.png';
import PProfile3 from '../../assets/p-profile3.png';
import PProfile4 from '../../assets/p-profile4.png';
import PAdmin1 from '../../assets/p-admin1.png';
import PAdmin2 from '../../assets/p-admin2.png';
import PAdmin3 from '../../assets/p-admin3.png';
import Chat4 from '../../assets/chat4.png';
import Chat5 from '../../assets/chat5.png';

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
              <img src={PProfile1} alt="Search" />
            </button>
            <div className="card">
              <img src={PProfile4} alt="Search" />
            </div>
            <button className="card">
              <img src={PProfile2} alt="Search" />
            </button>
            <div className="card">
              <img src={PProfile3} alt="Search" />
            </div>
          </>
        ) : (
          <>
            <button className="card">
              <img src={PAdmin1} alt="Search" />
            </button>
            <div className="card">
              <img src={PAdmin2} alt="Search" />
            </div>
            <button className="card">
              <img src={PAdmin3} alt="Search" />
            </button>
          </>
        )}
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src={Chat4} alt="Search" />
        </div>
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src={Chat5} alt="Search" />
        </div>
        <div className="card" style={{ visibility: 'hidden' }}>
          <img src={Chat5} alt="Search" />
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
