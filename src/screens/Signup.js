import React from 'react';
import Signup from '../containers/Signup';

export default class SignupScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }
  signUp = () => {
    this.props.navigation.navigate('Tabs')
  }

  render() {
    return (
      <Signup signUp={this.signUp} />
    );
  }
}