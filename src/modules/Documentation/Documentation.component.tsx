import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import styles from './Documentation.styles';
import ADCard from '../../ui-components/ADCard/ADCard';
import ADLoader from '../../ui-components/ADLoader/ADLoader';

const useStyles = makeStyles(styles);

const DocumentationComponent: React.FC<{}> = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await axios.get(
              '/api',
            );
            setTimeout(() => {
                setLoading(false)
                setData(result.data);
            }, 1000)
          };
          fetchData();
    }, []);

    return <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h5"> APIs and Services </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography> Access information on how to use Forge APIs and Services </Typography>
        </Grid>
        <Grid container item spacing={2} xs={12}>
            {!loading ? data.map(cardData => (
                    <Grid container item xs={12} md={6} lg={4}>
                        <ADCard cardData={cardData} />
                    </Grid>
                )): <Grid container item xs={12} alignContent="center" alignItems="center"> <ADLoader/> </Grid> }            
        </Grid>
    </Grid>
}

export default DocumentationComponent;
