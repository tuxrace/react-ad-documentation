import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const IntroComponent: React.FC<{}> = () => {
    return <Grid container direction="column" justify="flex-start" spacing={2}>
        <Grid item><Typography variant="h5"> Intro </Typography></Grid>
        <Grid item>This is an example description content data</Grid>
    </Grid>;
}

export default IntroComponent;