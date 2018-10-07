import React from 'react';
import { connect } from 'react-redux';
import { manualLogin } from '../actionCreators/app';
import Login from '../containers/Login/components/Login';

export class LoginScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }
  signUp = () => {
    this.props.navigation.navigate('Signup')
  }
  login = () => {
    this.props.navigation.navigate('Tabs')
  }
  componentWillReceiveProps = nextProps => {
    console.log('old logged in: ', this.props.loggedIn);
    console.log('new logged in: ', nextProps.loggedIn);
    if (!this.props.loggedIn && nextProps.loggedIn) {
      this.props.navigation.navigate('Tabs');
    }
  };
  render() {
    return (
      <Login signUp={this.signUp} manualLogin={this.props.manualLogin} />
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.app.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  manualLogin: credentials => dispatch(manualLogin(credentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)