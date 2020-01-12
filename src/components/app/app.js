import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
});

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header className={classes.header} />
        <Container className={classes.main} component="main" maxWidth="md">
          <p>Content goes here</p>
        </Container>
        <Footer className={classes.footer} />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
