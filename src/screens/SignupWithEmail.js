import React from 'react';
import { connect } from 'react-redux';
import { signupWithEmail } from '../actionCreators/app';
import SignupWithEmail from '../containers/SignupWithEmail/components/SignupWithEmail';

class SignupWithEmailScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  handleNavigate = (stack) => {
    this.props.navigation.navigate(stack);
  }

  login = () => {
    this.props.navigation.navigate('Login')
  }

  componentWillReceiveProps = nextProps => {
    if (!this.props.loggedIn && nextProps.loggedIn) {
      this.props.navigation.navigate('Tabs');
    }
  };

  render() {
    return (
      <SignupWithEmail
        signupWithEmail={this.props.signup}
        handleNavigate={this.handleNavigate}
        loggedIn={this.props.loggedIn}
        login={this.login}
      />
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.app.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  signup: (data) => {
    dispatch(signupWithEmail(data));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupWithEmailScreen);