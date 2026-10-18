import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Details } from './pages/Details';
import theme from "./styles/theme";
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </StrictMode>
)
