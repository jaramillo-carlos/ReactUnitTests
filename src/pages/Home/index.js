import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'
import RightContainer from './RightContainer'
import LeftContainer from './LeftContainer'

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.homeContainer}>
        <Grid item xs={2} className={classes.leftContainer}>
          <LeftContainer/>
        </Grid>
        <Grid item xs={10} className={classes.rightContainer}>
          <RightContainer/>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Home);
