import React from 'react';
import SignupWithEmail from '../containers/SignupWithEmail';

export default class SignupWithEmailScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <SignupWithEmail />
    );
  }
}