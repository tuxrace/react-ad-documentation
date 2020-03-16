import React from 'react';
import { Grid, CircularProgress, LinearProgress } from '@material-ui/core';

const ADLoader = () => {
    return <Grid container justify="flex-start" alignContent="center" alignItems="center">
        <Grid item xs={12}> <LinearProgress /></Grid>
    </Grid>
}

export default ADLoader;