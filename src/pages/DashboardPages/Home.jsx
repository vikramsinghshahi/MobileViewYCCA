import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const { BASE_URL } = import.meta.env;

function Home() {
  const [logoImage, setLogoImage] = useState(null);
  const [isParentLogin, setUserLogin] = useState(null);
  const navigator = useNavigate();

  console.log({ BASE_URL });

  useEffect(() => {
    const savedImage = localStorage.getItem('logo-image');
    if (savedImage) {
      setLogoImage(savedImage);
    }
  }, []);

  useEffect(() => {
    const isParentLogin = localStorage.getItem('isParentLogin');
    if (isParentLogin === 'true') {
      setUserLogin(true);
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
          <img src="/src/assets/avatar.png" alt="User Avatar" />
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
            <img src="/src/assets/logo.png" alt="YCCA Logo" />
          )}
          {/* <img src="/logo.png" alt="YCCA Logo" /> */}
        </div>
        <div className="flex">
          <div className="mediumFont bold">Dashboard</div>
          <div className="date">
            {formatDate()}
            <img
              src="/src/assets/hamburger.png"
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
        {isParentLogin ? (
          <div className="card birthday-card">
            <img src="/src/assets/parentCard.png" alt="Search" />
          </div>
        ) : (
          profileSection()
        )}

        <div className="card birthday-card">
          <img src="/src/assets/birthday.png" alt="Search" />
        </div>
        <div className="card birthday-card card-3">
          <img src="/src/assets/card3.png" alt="Search" />
        </div>
        <div className="card birthday-card card-4">
          <img src="/src/assets/card4.png" alt="Search" />
        </div>
        <div className="card birthday-card card-5">
          <img src="/src/assets/card5.png" alt="Search" />
        </div>
        <div className="card birthday-card card-6">
          <img src="/src/assets/card6.png" alt="Search" />
        </div>
        <div className="card birthday-card card-7">
          <img src="/src/assets/card7.png" alt="Search" />
        </div>
        <div className="card birthday-card card-8">
          <img src="/src/assets/card8.png" alt="Search" />
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
