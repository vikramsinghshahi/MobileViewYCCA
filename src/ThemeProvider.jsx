import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Hook to use theme context in components
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Load the theme from localStorage or fallback to a default color
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('themeColor');
    return savedTheme
      ? JSON.parse(savedTheme)
      : { primaryThemeColor: '#eb261e', datafieldColor: '#c11c15' };
  });

  // Change theme function
  const changeTheme = (color, color2) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      primaryThemeColor: color,
      datafieldColor: color2,
    }));
    document.documentElement.style.setProperty('--primary-theme-color', color);
    document.documentElement.style.setProperty('--datafield-color', color2);
    // Save the selected theme to localStorage
    localStorage.setItem(
      'themeColor',
      JSON.stringify({ primaryThemeColor: color, datafieldColor: color2 })
    );
  };

  // Effect to set the initial theme from localStorage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeColor');
    console.log(savedTheme);
    if (savedTheme) {
      const { primaryThemeColor, datafieldColor } = JSON.parse(savedTheme);
      console.log(primaryThemeColor);
      document.documentElement.style.setProperty(
        '--primary-theme-color',
        primaryThemeColor
      );
      document.documentElement.style.setProperty(
        '--datafield-color',
        datafieldColor
      );
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
