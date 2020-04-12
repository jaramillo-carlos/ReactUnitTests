import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { getData } from '../../utils/storage'
import { GITHUB_TOKEN } from '../../consts/index'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const githubToken = getData(GITHUB_TOKEN)
  return (
    <Route
      {...rest}
      render={props =>
        githubToken
          ? (<Component {...props} />)
          : <Redirect to={{ pathname: "/" }} />
      }
    />
  )
}

export default PrivateRoute;
