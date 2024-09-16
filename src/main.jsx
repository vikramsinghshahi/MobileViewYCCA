import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './ThemeProvider.jsx';
import './variables.css'; // Import the CSS variables
import './index.css';
const basename =
  import.meta.env.MODE === 'production' ? '/MobileViewYCCA/' : '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
