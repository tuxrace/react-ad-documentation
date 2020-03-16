import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import styles from './ADHeader.styles';

const useStyles = makeStyles(styles);

const ADHeader: React.FC<{}> = () => {
    const classes = useStyles();
    return <Grid container xs={12} className={classes.root}>
        <Grid item className={classes.title}>
            <Typography variant="h5">
                DOCUMENTATION
            </Typography>
        </Grid>
    </Grid>
}

export default ADHeader;
