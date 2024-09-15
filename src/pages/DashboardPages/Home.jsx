import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [logoImage, setLogoImage] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    const savedImage = localStorage.getItem('logo-image');
    if (savedImage) {
      setLogoImage(savedImage);
    }
  }, []);

  const profileSection = () => {
    const options = [
      { value: 'site-one', label: 'Site One' },
      { value: 'site-two', label: 'Site Two' },
      { value: 'all', label: 'All' },
    ];
    // Function to handle option change
    const handleSelectChange = (selectedOption) => {
      console.log('Selected option:', selectedOption);
    };
    return (
      <div className="card profile-section">
        <div className="dropDown">
          <h2>Hii Arjun,</h2>
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
        </div>
        <div className="avatar">
          <img src="/avatar.png" alt="User Avatar" />
        </div>
      </div>
    );
  };

  const formatDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const weekday = date.toLocaleString('en-US', { weekday: 'short' });
    return `${day} ${month}, ${weekday}`;
  };

  const header = () => {
    return (
      <div className="header">
        <div className="logo">
          {logoImage ? (
            <img src={logoImage} alt="YCCA Logo" />
          ) : (
            <img src="/logo.png" alt="YCCA Logo" />
          )}
          {/* <img src="/logo.png" alt="YCCA Logo" /> */}
        </div>
        <div className="flex">
          <div className="mediumFont bold">Dashboard</div>
          <div className="date">
            {formatDate()}
            <img
              src="/hamburger.png"
              alt="YCCA Logo"
              className="hamburger"
              onClick={() => navigator('/')}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        {profileSection()}
        <div className="card birthday-card">
          <img src="/birthday.png" alt="Search" />
        </div>
        <div className="card birthday-card card-3">
          <img src="/card3.png" alt="Search" />
        </div>
        <div className="card birthday-card card-4">
          <img src="/card4.png" alt="Search" />
        </div>
        <div className="card birthday-card card-5">
          <img src="/card5.png" alt="Search" />
        </div>
        <div className="card birthday-card card-6">
          <img src="/card6.png" alt="Search" />
        </div>
        <div className="card birthday-card card-7">
          <img src="/card7.png" alt="Search" />
        </div>
        <div className="card birthday-card card-8">
          <img src="/card8.png" alt="Search" />
        </div>
      </>
    );
  };

  return (
    <>
      {header()}
      <div className="main-content">{renderCards()}</div>
    </>
  );
}

export default Home;
