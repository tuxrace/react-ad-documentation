import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../modules/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const ThemeWrapper: React.FC<{}> = ({ children }) => {
return <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
};

export default ThemeWrapper;
