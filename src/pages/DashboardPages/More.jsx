import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function More() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [isParentLogin, setUserLogin] = useState(null);
  const navigate = useNavigate();
  const header = () => {
    return (
      <div className="header morePageHeader">
        <h1>More</h1>
      </div>
    );
  };
  const type = 'school-photo-image';

  console.log(backgroundImage);

  const containerStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
      }
    : {};

  useEffect(() => {
    const savedImage = localStorage.getItem('school-photo-image');
    if (savedImage) {
      setBackgroundImage(savedImage);
    }
  }, []);

  useEffect(() => {
    const isParentLogin = localStorage.getItem('isParentLogin');
    if (isParentLogin === 'true') {
      setUserLogin(true);
    }
  }, []);

  console.log(isParentLogin);

  const renderCards = () => {
    return (
      <div className="cardContainer">
        <button className="card " onClick={() => navigate('/dashboard/chats')}>
          <img src="/More1.png" alt="Search" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/announcement')}
        >
          <img src="/More2.png" alt="Search" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/activity')}
        >
          <img src="/More3.png" alt="Search" />
        </button>
        <button className="card " onClick={() => navigate('/dashboard/report')}>
          <img src="/More4.png" alt="Search" />
        </button>
        <div className="card  ">
          <img src="/More5.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More6.png" alt="Search" />
        </div>
        <div className="card ">
          <img src="/More9.png" alt="Search" />
        </div>
        {!isParentLogin ? (
          <>
            <div className="card  ">
              <img src="/More7.png" alt="Search" />
            </div>
            <div className="card  ">
              <img src="/More8.png" alt="Search" />
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
          </>
        ) : (
          <>
            <div className="card" onClick={() => navigate('/dashboard/fees')}>
              <img src="/Fee.png" alt="Search" />
            </div>
            <div className="card">
              <img src="/Gallery.png" alt="Search" />
            </div>
          </>
        )}
        <div className="card  ">
          <img src="/More13.png" alt="Search" />
        </div>
        <div className="card" onClick={() => navigate('/dashboard/profile')}>
          <img src="/More14.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More15.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More16.png" alt="Search" />
        </div>
        <div className="card" style={{ pointerEvents: 'none' }}>
          {/* <img src="/More16.png" alt="Search" /> */}
        </div>
      </div>
    );
  };

  return (
    <>
      {header()}
      <div className="main-content morePageContent" style={containerStyle}>
        {renderCards()}
      </div>
    </>
  );
}

export default More;
