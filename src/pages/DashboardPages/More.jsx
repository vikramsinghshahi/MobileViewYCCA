import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import More1 from '../../assets/more1.png';
import More2 from '../../assets/more2.png';
import More3 from '../../assets/more3.png';
import More4 from '../../assets/more4.png';
import More5 from '../../assets/more5.png';
import More6 from '../../assets/more6.png';
import More7 from '../../assets/more7.png';
import More8 from '../../assets/more8.png';
import More9 from '../../assets/more9.png';
import More10 from '../../assets/more10.png';
import More11 from '../../assets/more11.png';
import More12 from '../../assets/more12.png';
import More13 from '../../assets/more13.png';
import More14 from '../../assets/more14.png';
import More15 from '../../assets/more15.png';
import More16 from '../../assets/more16.png';
import Fee from '../../assets/fee.png';
import Gallery from '../../assets/gallery.png';
import More17 from '../../assets/more17.png';
import More18 from '../../assets/more18.png';
import More19 from '../../assets/more19.png';
import More20 from '../../assets/more20.png';
import More21 from '../../assets/more21.png';
import More22 from '../../assets/more22.png';
import More23 from '../../assets/more23.png';
import More24 from '../../assets/more24.png';
import More25 from '../../assets/more25.png';
import More26 from '../../assets/more26.png';
import More27 from '../../assets/more27.png';
import More28 from '../../assets/more28.png';
import More29 from '../../assets/more29.png';
import More30 from '../../assets/more30.png';
import More31 from '../../assets/more31.png';
import More32 from '../../assets/more32.png';

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
        <button className="card" onClick={() => navigate('/dashboard/chats')}>
          <img src={More17} alt="More 1" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/announcement')}
        >
          <img src={More18} alt="More 2" />
        </button>
        <button
          className="card"
          onClick={() => navigate('/dashboard/activity')}
        >
          <img src={More19} alt="More 3" />
        </button>
        <button className="card" onClick={() => navigate('/dashboard/report')}>
          <img src={More20} alt="More 4" />
        </button>
        <div className="card">
          <img src={More21} alt="More 5" />
        </div>
        <div className="card">
          <img src={More22} alt="More 6" />
        </div>
        <div className="card">
          <img src={More23} alt="More 9" />
        </div>
        {!isParentLogin ? (
          <>
            <div className="card">
              <img src={More24} alt="More 7" />
            </div>
            <div
              className="card"
              onClick={() => navigate('/dashboard/communication')}
            >
              <img src={More25} alt="More 8" />
            </div>
            <div className="card">
              <img src={More26} alt="More 10" />
            </div>
            <div className="card">
              <img src={More27} alt="More 11" />
            </div>
            <div className="card">
              <img src={More28} alt="More 12" />
            </div>
          </>
        ) : (
          <>
            <div className="card" onClick={() => navigate('/dashboard/fees')}>
              <img src={Fee} alt="Fee" />
            </div>
            <div
              className="card"
              onClick={() => navigate('/dashboard/gallery')}
            >
              <img src={Gallery} alt="Gallery" />
            </div>
          </>
        )}
        <div className="card">
          <img src={More29} alt="More 13" />
        </div>
        <div className="card" onClick={() => navigate('/dashboard/profile')}>
          <img src={More30} alt="More 14" />
        </div>
        <div className="card">
          <img src={More31} alt="More 15" />
        </div>
        <div className="card">
          <img src={More32} alt="More 16" />
        </div>
        <div className="card" style={{ pointerEvents: 'none' }}>
          {/* <img src={More16} alt="More 16" /> */}
        </div>
        <div className="card" style={{ pointerEvents: 'none' }}>
          {/* <img src={More16} alt="More 16" /> */}
        </div>
        <div className="card" style={{ pointerEvents: 'none' }}>
          {/* <img src={More16} alt="More 16" /> */}
        </div>
        <div className="card" style={{ pointerEvents: 'none' }}>
          {/* <img src={More16} alt="More 16" /> */}
        </div>
        <div className="card" style={{ pointerEvents: 'none' }}>
          {/* <img src={More16} alt="More 16" /> */}
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
