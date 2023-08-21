import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00668c',
    },
    secondary: {
      main: '#71c4ef',
    },
    background: {
      default: '#fffefb',
      paper: '#f5f4f1',
    },
    text: {
      primary: '#1d1c1c',
      secondary: '#313d44',
    },
  },
});

export default theme;