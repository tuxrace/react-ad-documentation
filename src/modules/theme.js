import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import adColors from '../constants/adColors';

let theme = createMuiTheme({
    spacing: 8,
    palette: {
      primary: {
        light: '#60c6ff',
        main: adColors.adBlue,
        dark: '#0068a5',
        contrastText: '#fff',
      },
      secondary: {
        light: '#949494',
        main: adColors.charcoalGray,
        dark: '#3c3c3c',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

theme = responsiveFontSizes(theme);

export default theme;
