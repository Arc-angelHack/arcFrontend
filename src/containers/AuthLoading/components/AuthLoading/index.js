import React from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { setLogin } from '../../../../actionCreators/app';
import { connect } from 'react-redux';
import styles from './styles';

export class AuthLoading extends React.Component {
  componentDidMount = () => {
    this.autoLogin();
  };

  autoLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    console.log(token, userId);
    if (token !== null) {
      this.props.setLogin(userId, token);
      this.props.handleNavigate('Tabs');
    } else {
      this.props.handleNavigate('Auth');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.app.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
  setLogin: (userId, token) => dispatch(setLogin(userId, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading)