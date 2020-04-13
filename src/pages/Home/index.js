import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import get from 'lodash/get'

import { getProfileData, getProfileRepos } from '../../redux/actions/profile'
import { styles } from './styles'
import RightContainer from './RightContainer'
import LeftContainer from './LeftContainer'
import { getData } from '../../utils/storage'
import { GITHUB_TOKEN } from '../../consts'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { githubToken: null }
  }

  async componentDidMount() {
    const githubToken = getData(GITHUB_TOKEN)
    await this.setState({ githubToken })
    this.props.getProfileData({ githubToken });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.homeContainer}>
        <Grid item xs={2} className={classes.leftContainer}>
          <LeftContainer />
        </Grid>
        <Grid item xs={10} className={classes.rightContainer}>
          <RightContainer />
        </Grid>
      </Grid>
    )
  }
}

const actions = {
  getProfileData,
  getProfileRepos
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    // githubData: state.githubData
    githubData: get(state, 'profile.githubData', null)
  }
}

export default compose(
  connect(mapStateToProps, actions),
  withStyles(styles)
)(Home)
