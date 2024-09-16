import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.scss';

function Home() {
  const navigate = useNavigate();
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
  return (
    <div className="page home">
      <div className="header">
        {logoImage ? (
          <img src={logoImage} alt="YCCA Logo" className="logo" />
        ) : (
          <img src="/src/assets/logo.png" alt="YCCA Logo" className="logo" />
        )}

        <h1>Welcome</h1>
        <p className="smallFont">Sign In to Kindergarten School</p>
      </div>
      <div className="footer">
        <p className="microFont">
          Powered by <span className="unify largeFont">UNIFY</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
