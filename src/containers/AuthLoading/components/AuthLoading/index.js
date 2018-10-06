import React from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { autoLogin } from '../../../../actionCreators/app';
import styles from './styles';

export class AuthLoading extends React.Component {
  constructor(props) {
    super(props)
    this.autoLogin()
  }

  autoLogin = async () => {
    await this.props.autoLogin();
    const loggedIn = this.props.auth ? 'Tabs' : 'Auth';
    this.props.handleNavigate(loggedIn);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.app.auth
})

const mapDispatchToProps = (dispatch) => ({
  autoLogin: () => dispatch(autoLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading)