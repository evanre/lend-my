import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function BuiltWithLove() {
  return (
    <Typography variant="body1">
      {'Built with ❤️ on '}
      <Link color="inherit" href="https://reactjs.org/" target="_blank">React</Link>
      {' & '}
      <Link color="inherit" href="https://material-ui.com/" target="_blank">Material-UI</Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  container: {
    padding: theme.spacing(3, 2),
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.footer} position="static" component="footer" color="default">
      <Container className={classes.container} maxWidth="md">
        <BuiltWithLove />
        <Typography variant="body2">
          <Link href="https://github.com/evanre/lend-my" target="_blank">Github</Link>
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer
