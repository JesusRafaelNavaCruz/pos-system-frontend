import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#2196f3',
    },
    background: {
      default: '#f5f5f5',
      paper: '#f5f4f1',
    },
    text: {
      primary: '#1d1c1c',
      secondary: '#313d44',
    },
    error: {
      main: '#e57373',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#64b5f6',
    },
    success: {
      main: '#4caf50',
    },
  },
});

export default theme;