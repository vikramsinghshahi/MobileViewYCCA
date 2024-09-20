import { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';
// import { hsvaToHex } from '@uiw/color-convert';
// import { ColorWheel } from 'react-color-wheel';
import './Pages.scss';

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function SetTheme() {
  const { theme, changeTheme } = useTheme();
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);

  const { primaryThemeColor } = theme || {};
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const navigate = useNavigate();

  const fileInput1 = useRef(null); // Ref for the first file input
  const fileInput2 = useRef(null); //

  useEffect(() => {
    const savedImage = localStorage.getItem('school-photo-image');
    const saveLogo = localStorage.getItem('logo-image');
    if (savedImage) {
      setImage(savedImage);
    }
    if (saveLogo) {
      setLogo(saveLogo);
    }
  }, []);

  // console.log({ props, color }, 'line 9');
  const handleReset = () => {
    // Clear the localStorage
    localStorage.clear();

    // Clear the file inputs by accessing the refs
    if (fileInput1.current) {
      fileInput1.current.value = '';
    }
    if (fileInput2.current) {
      fileInput2.current.value = '';
    }

    changeTheme(null, null);
    setImage(null);
    setLogo(null);
  };

  const bottomNav = () => (
    <div className="bottom-nav">
      {/* Navigation Icons */}
      <button className="previewBtn" onClick={() => handleReset()}>
        Reset
      </button>
      <button className="saveBtn" onClick={() => navigate('/')}>
        Update
      </button>
    </div>
  );

  const debouncedChangeTheme = useCallback(
    debounce((color, darkerValue) => {
      changeTheme(color, darkerValue); // Your changeTheme function
    }, 300),
    [changeTheme]
  );

  const type = 'school-photo';
  const logotype = 'logo';

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Set the base64 image
      localStorage.setItem(`${type}-image`, reader.result); // Save the image in localStorage
    };
    if (file) {
      reader.readAsDataURL(file); // Convert the image to base64
    }
  };

  const handlelogoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result); // Set the base64 image
      localStorage.setItem(`${logotype}-image`, reader.result); // Save the image in localStorage
    };
    if (file) {
      reader.readAsDataURL(file); // Convert the image to base64
    }
  };

  const colorArray = [
    { id: 1, color: '#eb261e', color2: '#c11c15' },
    { id: 2, color: '#0d95d1', color2: '#0c6b93' },
    { id: 3, color: 'yellow', color2: '#0c6b93' },
    { id: 4, color: 'orange', color2: '#0c6b93' },
    { id: 5, color: 'green', color2: '#0c6b93' },
  ];

  const triggerImageInput = () => {
    if (document.getElementById('imageUploadInput')) {
      document.getElementById('imageUploadInput').click();
    }
  };

  const triggerLogoInput = () => {
    if (document.getElementById('logoUploadInput')) {
      document.getElementById('logoUploadInput').click();
    }
  };

  const getDarkerShade = (color) => {
    const darkerValue = Math.max(0, color.v - color.v * 0.5); // Reduce brightness by 20%
    return { ...color, v: darkerValue }; // Return the darker color in HSVA format
  };

  return (
    <div className="page dashboard themePage">
      <div className="header timelinePageHeader">
        <h1>Personalise</h1>
      </div>
      <div className="main-content timeLinePageContent">
        <div className="card phone"></div>
        <div className="btn-container">
          <button className="upload logoUpload" onClick={triggerLogoInput}>
            {!logo && (
              <input
                type="file"
                accept="image/*"
                id="logoUploadInput"
                ref={fileInput1}
                onChange={handlelogoUpload}
                style={{ display: 'none' }} // Hide the input
              />
            )}
            <div className="white-bg">
              {logo && (
                <img
                  src={logo}
                  alt={`${logotype}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              )}
            </div>
          </button>
          <button className="upload imageUpload" onClick={triggerImageInput}>
            {!image && (
              <input
                type="file"
                accept="image/*"
                id="imageUploadInput"
                ref={fileInput2}
                onChange={handleImageUpload}
                style={{ display: 'none' }} // Hide the input
              />
            )}
            <div className="white-bg photo-bg">
              {image && (
                <img
                  src={image}
                  alt={`${type}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              )}
            </div>
          </button>
        </div>
        <div className="card colorSection">
          <div className="pickedColorContainer">
            <span>Color</span>
            <span
              className="pickedColor"
              style={{
                backgroundColor: `${hsvaToHex(hsva) || primaryThemeColor}`,
              }}
            ></span>
          </div>
          <p className="title">Basic Color</p>
          <div className="colorArray">
            {colorArray.map((e) => {
              return (
                <button
                  key={e.id}
                  className="item"
                  style={{ backgroundColor: `${e.color}` }}
                  onClick={() => changeTheme(e.color, e.color2)}
                ></button>
              );
            })}
          </div>
          <div className="wheel">
            <Wheel
              color={hsva}
              onChange={(color) => {
                setHsva({ ...hsva, ...color.hsva });

                const darkerValue = getDarkerShade(color.hsva);

                debouncedChangeTheme(
                  hsvaToHex(color.hsva),
                  hsvaToHex(darkerValue)
                );
              }}
            />
          </div>
          {/* <p>Selected Color: {hsvaToHex(hsva)} </p> */}
        </div>
      </div>
      {bottomNav()}
    </div>
  );
}

export default SetTheme;
