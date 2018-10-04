import React from 'react';
import { View, Text, TextInput } from 'react-native';
import FacebookButton from '../../../../globals/FacebookButton';
import TwitterButton from '../../../../globals/TwitterButton';
import GoogleButton from '../../../../globals/GoogleButton';
import styles from './styles';
import GenericButton from '../../../../globals/GenericButton';
//TODO: Move styles into styles.js
//TODO: Navigation to Login Page
//TODO: Hook up to API


export default class Login extends React.PureComponent {
  state = {
    email: '',
    password: '',
  }

  onEmailChange = (text) => this.setState(() => ({ email: text }))
  onPasswordChange = (text) => this.setState(() => ({ password: text }))

  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>WELCOME BACK!</Text>
        </View>
        <Text style={styles.text}>Login with</Text>
        <View style={styles.buttonContainer}>
          <FacebookButton />
          <GoogleButton />
          <TwitterButton />
        </View>
        <Text style={styles.text}>or</Text>
        <View style={{ marginTop: 10, marginBottom: 10, alignItems: 'stretch' }}>
          <TextInput
            returnKeyType="next"
            autoCapitalize="none"
            value={this.state.email}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={this.onEmailChange}
            style={this.state.email ? styles.text__input : styles.placeholder}
          />
          <TextInput
            returnKeyType="go"
            autoCapitalize="none"
            value={this.state.password}
            placeholder="Password"
            onChangeText={this.onPasswordChange}
            secureTextEntry={true}
            style={this.state.password ? styles.text__input : styles.placeholder}
          />
        </View>
        <GenericButton text={"Login"} onPress={() => { }} />
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Text style={styles.text}>Need an account?  <Text style={styles.text__link}>Login</Text></Text>
        </View>
      </View>
    );
  }
}

