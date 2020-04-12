import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import GitHubLogin from 'react-github-login';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getGithubToken } from '../../redux/actions/login'
import { styles } from './styles'

class Login extends Component {
  onSuccess = response => {
    if (response.code) {
      this.props.getGithubToken({code: response.code})
    }
  }
  onFailure = response => console.error(response);

  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <Typography variant="h1" className={classes.title}>Iniciar Sesion</Typography>
          <GitHubLogin
            className={classes.button}
            clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
            redirectUri={process.env.REACT_APP_GITHUB_CALLBACK_URL}
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            buttonText="Github Account" />
        </Card>
      </div>
    )
  }
}

// mapDispatchToProps
// actions is new alternative used
const actions = {
  getGithubToken
}

const mapStateToProps = (state) => ({
  githubToken: state.login.githubToken
})

// export default withStyles(styles)(Login);
// usually only need connect, but how this already have a HoC (withStyles),
// With Compose, can chain or merge multiple HoC to component
export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Login);