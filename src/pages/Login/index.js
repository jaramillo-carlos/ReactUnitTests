import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { styles } from './styles'
import GitHubLogin from 'react-github-login';

class Login extends Component {
  onSuccess = response => console.log(response);
  onFailure = response => console.error(response);

  render() {
    const { classes } = this.props;
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

export default withStyles(styles)(Login);