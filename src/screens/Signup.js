import React from 'react';
import Signup from '../containers/Signup';

export default class SignupScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }
  signUp = () => {
    this.props.navigation.navigate('Tabs')
  }
  login = () => {
    this.props.navigation.navigate('Login')
  }
  signupWithEmail = () => {
    this.props.navigation.navigate('SignupWithEmail')
  }

  render() {
    return (
      <Signup signUp={this.signUp} login={this.login} signupWithEmail={this.signupWithEmail} />
    );
  }
}