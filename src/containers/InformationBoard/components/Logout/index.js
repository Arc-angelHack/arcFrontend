import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../../../../actionCreators/app';
import styles from './styles'

class Logout extends React.Component {
  componentWillReceiveProps = nextProps => {
    console.log('old logged in: ', this.props.loggedIn);
    console.log('new logged in: ', nextProps.loggedIn);
    if (this.props.loggedIn && !nextProps.loggedIn) {
      this.props.navigation.navigate('Auth');
    }
  };
  _logout = async () => {
    await this.props.logout();
  }
  render() {
    return (
      <TouchableOpacity style={styles.image} onPress={this._logout}>
        <Image
          style={styles.image}
          source={{ uri: 'https://lh3.googleusercontent.com/q3KvsCKoI45EJtUIpvE9oYTLqEktTieDoWOCtTg6KVgelnhK5jGn9Xhw9KqtCg2q3gdfwMHUEl0EWUVTNB44-dky' }}
        />
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.app.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)