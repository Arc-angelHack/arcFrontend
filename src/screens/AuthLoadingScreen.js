import React from 'react';
import AuthLoading from '../containers/AuthLoading/components/AuthLoading';

export default class AuthLoadingScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  handleNavigate = (stack) => {
    this.props.navigation.navigate(stack);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.loggedIn) {
      this.props.navigation.navigate('Tabs');
    }
  }

  render() {
    return <AuthLoading handleNavigate={this.handleNavigate} />
  }
}