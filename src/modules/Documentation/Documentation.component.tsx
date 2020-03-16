import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import styles from './Documentation.styles';
import ADCard from '../../ui-components/ADCard/ADCard';

const useStyles = makeStyles(styles);

const DocumentationComponent: React.FC<{}> = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
              '/api',
            );
            setData(result.data);
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
            {data.map(cardData => (
                    <Grid container item xs={12} md={6} lg={4}>
                        <ADCard cardData={cardData} />
                    </Grid>
                ))}            
        </Grid>
    </Grid>
}

export default DocumentationComponent;
