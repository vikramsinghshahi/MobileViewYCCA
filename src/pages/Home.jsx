import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import kindergatern from '../assets/kindergatern.png';
import './Pages.scss';

function Home() {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('logo-image');
    if (savedImage) {
      setLogoImage(savedImage);
    }
  }, []);

  useEffect(() => {
    // Redirect to /login after 2 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const savedImage = localStorage.getItem('school-photo-image');
    if (savedImage) {
      setBackgroundImage(savedImage);
    }
  }, []);

  const containerStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
      }
    : {
        backgroundImage: `url(${kindergatern})`,
      };
  return (
    <div className="page home" style={containerStyle}>
      <div className="header">
        {logoImage ? (
          <img src={logoImage} alt="YCCA Logo" className="logo homeLogo" />
        ) : (
          <img src={logo} alt="YCCA Logo" className="logo homeLogo" />
        )}

        <h1>Hey There!</h1>
        <p className="smallFont">Welcome to Kindergarten School</p>
      </div>
      <div className="footer">
        <p className="microFont white">
          Powered by <span className="unify largeFont white">UNIFY</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
