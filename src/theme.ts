import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export default createTheme({
  palette: {
    primary: {
      light: green[50],
      main: green[600],
      dark: '#003300',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: green[100],
      dark: '#ba000d',
      contrastText: '#000',
    },
	text: {
      primary: 'rgb(0, 0, 0, 0.58)',
      secondary: 'rgb(0,0,0,0.48)',
    },
  },
});
