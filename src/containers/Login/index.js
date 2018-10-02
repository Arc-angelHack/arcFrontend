import React from 'react';
import { View, Text, TextInput } from 'react-native';
import FacebookButton from '../../globals/FacebookButton';
import TwitterButton from '../../globals/TwitterButton';
import GoogleButton from '../../globals/GoogleButton';
import styles from './styles';
import GenericButton from '../../globals/GenericButton';
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
        <Text style={styles.logo}>WELCOME BACK!</Text>
        <Text style={styles.text}>Login with</Text>
        <View style={styles.buttonContainer}>
          <FacebookButton />
          <GoogleButton />
          <TwitterButton />
        </View>
        <Text style={styles.text}>Or</Text>
        <View style={{ marginTop: 10, marginBottom: 10, alignItems: 'stretch' }}>
          <TextInput
            value={this.state.email}
            placeholder="Email"
            onChangeText={this.onEmailChange}
            style={{ width: 350, borderBottomWidth: 2, borderBottomColor: '#e6e6e6' }}
          />
          <TextInput
            value={this.state.password}
            placeholder="Password"
            onChangeText={this.onPasswordChange}
            secureTextEntry={true}
            style={{ width: 350, borderBottomWidth: 2, borderBottomColor: '#e6e6e6' }}
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

