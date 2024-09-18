import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import kindergatern from '../assets/kindergatern.png';
import './Pages.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [logoImage, setLogoImage] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [consent, setConsent] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    // Toggle the 'dark-theme' class on the body element
    if (!isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const savedImage = localStorage.getItem('logo-image');
    if (savedImage) {
      setLogoImage(savedImage);
    }
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // // Handle form submission logic here
    // navigate('/dashboard');
    // localStorage.setItem(`isParentLogin`, false);
    // console.log({ email, password, consent });

    const normalizedEmail = email.trim().toLowerCase();

    // Check for specific roles and navigate accordingly
    if (normalizedEmail === 'admin') {
      navigate('/dashboard');
      localStorage.setItem(`isParentLogin`, false);
    } else if (normalizedEmail === 'parent') {
      localStorage.setItem('isParentLogin', true);
      navigate('/dashboard');
    } else if (
      normalizedEmail === 'superadmin' ||
      normalizedEmail === 'super admin'
    ) {
      navigate('/set-theme');
    } else {
      // Handle incorrect username or other cases (if needed)
      alert('Invalid username');
    }
  };

  return (
    <div className="page login" style={containerStyle}>
      <div className="flex">
        <div className="header">
          {logoImage ? (
            <img src={logoImage} alt="YCCA Logo" className="logo" />
          ) : (
            <img src={logo} alt="YCCA Logo" className="logo" />
          )}

          <h1>Welcome</h1>
          <p className="smallFont">Sign In to Kindergarten School</p>
        </div>
        {/* <button onClick={toggleTheme}>
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button> */}
        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email / Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* <span className="show-password" onClick={togglePasswordVisibility}>
            {showPassword ? '🙈' : '👁'}
          </span> */}
          </div>

          <button type="submit" className="btn btn-signin">
            Sign In
          </button>

          <div className="consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <label className="microFont">
              I accept <a href="#">User Data Consent Policy</a>
            </label>
          </div>

          <p className="forgot-password">Forgot Password?</p>

          <button className="btn btn-faceid">Sign In with Face ID</button>

          {/* <NavLink to="#" className="login-other">
            Login with another user
          </NavLink>
          <NavLink to="/set-theme" className="login-other">
            Set Theme
          </NavLink>
          <NavLink
            to="/dashboard"
            className="login-other"
            onClick={() => {
              localStorage.setItem('isParentLogin', true);
            }}
          >
            Parent Login
          </NavLink> */}
        </form>
      </div>

      {/* Footer illustration */}
      <div className="footer">
        <p className="microFont white">
          Powered by <span className="unify largeFont white">UNIFY</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
