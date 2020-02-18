import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { lighten } from '@material-ui/core/styles/colorManipulator'
import Typography from '@material-ui/core/Typography';

import ItemNav from '../item-nav';

const styles = (theme) => ({
    card: {
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
      margin: theme.spacing(0, 0, 3),
    },
    index: {
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      display: 'flex',
      padding: theme.spacing(1),
      justifyContent: 'center',
      textAlign: 'center',
    },
    content: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '150px',
      maxWidth: '100%',
      padding: theme.spacing(4, 2),
    },
    info: {
      flexShrink: 0,
      textAlign: 'center',
      backgroundColor: lighten(theme.palette.primary.main, 0.9),
      width: '200px',
      padding: theme.spacing(4),
    },
    anchor: {
      position: 'absolute',
      top: 0,
      right: 0,
      [theme.breakpoints.only('xs')]: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        top: 3,
        right: 3,
      },
    },
});

const Item = ({ classes, data }) => {
  return (
    <Card className={classes.card} component="article">
      <strong className={classes.index}>{data.id}</strong>
      <CardContent className={classes.content} component="header">
        <Typography component="h3" variant="h5" color="textPrimary">{data.title}</Typography>
        <Typography variant="subtitle2" color="textSecondary">from {data.author}</Typography>
      </CardContent>
      <CardContent className={classes.info} component="footer">
        <Typography component="h4" variant="h5" color="textPrimary">{data.lender}</Typography>
        <Typography variant="subtitle2" component="time" color="textSecondary">{data.dates}</Typography>
      </CardContent>
      <ItemNav className={classes.anchor} id={data.id} />
    </Card>
  );
};

export default withStyles(styles)(Item);
