import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import styles from './ADContainer.styles';

const useStyles = makeStyles(styles);

const ADContainer: React.FC<{}> = ({children}) => {
    const classes = useStyles();
    return <Grid xs={12} container className={classes.root}>
        <Grid item className={classes.content}>
            {children}
        </Grid>
    </Grid>
}

export default ADContainer;
