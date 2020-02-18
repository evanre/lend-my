import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../../tools/withRoot';
import Header from '../header';
import Footer from '../footer';
import List from '../list';

const styles = () => ({
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
        <Header/>
        <Container component="main" maxWidth="md">
          <List/>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
