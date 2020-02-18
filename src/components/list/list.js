import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

import Item from '../item';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(3, 0),
  },
}));

const List = () => {
  const classes = useStyles();
  const data = {
    id: 1,
    title: 'The Big Five For Life: A story of one man and leadership\'s greatest secret',
    author: 'John Strelecky and Bettina Lemke',
    dates: '02.12.19 - 01.01.20',
    lender: 'Roman Engelman',
  };
  const data2 = {
    id: 2,
    title: 'leadership\'s greatest secret',
    author: 'John Strelecky and Bettina Lemke',
    dates: '02.12.19 - 01.01.20',
    lender: 'Engelman',
  };

  return (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item xs={12}>
        <Item data={data}/>
        <Item data={data2}/>
      </Grid>
    </Grid>
  );
};

export default List;
