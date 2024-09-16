import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Pages.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [logoImage, setLogoImage] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [consent, setConsent] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/dashboard');
    localStorage.setItem(`isParentLogin`, false);
    console.log({ email, password, consent });
  };

  return (
    <div className="page login">
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
              type="email"
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

          <a href="#" className="login-other">
            Login with another user
          </a>
          <a href="/set-theme" className="login-other">
            Set Theme
          </a>
          <a
            href="/dashboard"
            className="login-other"
            onClick={() => {
              localStorage.setItem(`isParentLogin`, true);
            }}
          >
            Parent Login
          </a>
        </form>
      </div>

      {/* Footer illustration */}
      <div className="footer">
        <p className="microFont">
          Powered by <span className="unify largeFont">UNIFY</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
