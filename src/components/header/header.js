import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: theme.spacing(3, 2),
    textAlign: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar component="header" position="static">
        <Container className={classes.toolbar} maxWidth="md">
          <Typography variant="h5" component="h1">Books that I have lent to my friends</Typography>
        </Container>
    </AppBar>
  );
};

export default Header;
