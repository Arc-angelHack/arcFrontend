import React from 'react';
import Login from '../containers/Login/components/Login';

export default class LoginScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Login />
    );
  }
}