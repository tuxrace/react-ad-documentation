import React from 'react';
import { Grid, makeStyles, Box, Typography } from '@material-ui/core';
import styles from './ADCard.styles';
import { documentionInfo } from '../../modules/types';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

const useStyles = makeStyles(styles);

type Props = {
    cardData: documentionInfo;
}

const ADCard: React.FC<Props> = ({ cardData }) => {
    const classes = useStyles();
    return <Box
    boxShadow={1}
    bgcolor="background.paper"
    p={1}
    className={classes.root}
  >
      <Grid container justify="flex-start" direction="column">
        <Grid item><Typography variant="h6"> {cardData.title} </Typography></Grid>
        <Grid item>{cardData.description} </Grid>
        <Grid item container justify="flex-start" direction="column" className={classes.cardLinks} spacing={2}>
            <Grid item><Link to={`${routes.developer}/${cardData.id}${routes.intro}`}>
            <Typography variant="subtitle1">Intro </Typography>
            </Link> </Grid>
            <Grid item><Link to={`${routes.developer}/${cardData.id}${routes.guide}`}><Typography variant="subtitle1">Guide</Typography></Link></Grid>
            <Grid item><Link to={`${routes.developer}/${cardData.id}${routes.reference}`}><Typography variant="subtitle1">Reference</Typography></Link></Grid>
        </Grid>
      </Grid>
  </Box>
}

export default ADCard;
