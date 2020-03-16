import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const GuideComponent: React.FC<{}> = () => {
    return <Grid container justify="flex-end" direction="column" spacing={2}>
        <Grid item>
            <Typography variant="h5">Guide</Typography>
        </Grid>
        <Grid item>This is an example description content data</Grid>
    </Grid>
}

export default GuideComponent;