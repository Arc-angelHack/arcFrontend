import React from 'react';
import SignupWithEmail from '../containers/SignupWithEmail/components/SignupWithEmail';

export default class SignupWithEmailScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  handleNavigate = (stack) => {
    this.props.navigation.navigate(stack);
  }

  login = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <SignupWithEmail handleNavigate={this.handleNavigate} login={this.login} />
    );
  }
}