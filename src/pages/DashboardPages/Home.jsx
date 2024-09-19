import DataField from '../../Common/DataField/DataField';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Hamburger from '../../assets/hamburger.png';
import Avatar from '../../assets/avatar.png';
import ParentCard from '../../assets/parentCard.png';
import BirthdayPng from '../../assets/birthday.png';
import Card3Png from '../../assets/card3.png';
import Card4Png from '../../assets/card4.png';
import Card5Png from '../../assets/card5.png';
import Card6Png from '../../assets/card6.png';
import Card7Png from '../../assets/card7.png';
import Card8Png from '../../assets/card8.png';
import Card9Png from '../../assets/card9.png';
import Card10Png from '../../assets/card10.png';
import Card11Png from '../../assets/card11.png';
import Card12Png from '../../assets/card12.png';
import Card13Png from '../../assets/card13.png';
import Card14Png from '../../assets/card14.png';

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

    const options2 = [
      { value: 'class-one', label: 'Class One' },
      { value: 'class-two', label: 'Class Two' },
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
        </div>
        <div className="avatar">
          <img src={Avatar} alt="User Avatar" />
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
            <img src={logo} alt="YCCA Logo" />
          )}
          {/* <img src="/logo.png" alt="YCCA Logo" /> */}
        </div>
        <div className="flex">
          <div className="mediumFont bold">Dashboard</div>
          <div className="date">
            {formatDate()}
            <img
              src={Hamburger}
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
            <img src={ParentCard} alt="Search" />
          </div>
        ) : (
          profileSection()
        )}

        <div className="card birthday-card">
          <img src={BirthdayPng} alt="Birthday" />
        </div>
        <div className="card birthday-card card-3">
          <img src={Card9Png} alt="Card 3" />
        </div>
        <div className="card birthday-card card-4">
          <img src={Card10Png} alt="Card 4" />
        </div>
        <div className="card birthday-card card-5">
          <img src={Card11Png} alt="Card 5" />
        </div>
        <div className="card birthday-card card-6">
          <img src={Card12Png} alt="Card 6" />
        </div>
        <div className="card birthday-card card-7">
          <img src={Card13Png} alt="Card 7" />
        </div>
        <div className="card birthday-card card-8">
          <img src={Card14Png} alt="Card 8" />
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
