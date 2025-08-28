import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>  {/* O usa createTheme() directo */}
      <AppProvider>
        <App />
      </AppProvider>
  </ThemeProvider>
);