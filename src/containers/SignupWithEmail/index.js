import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

//TODO: Move styles into styles.js
//TODO: Navigation to Login Page
//TODO: Hook up to API


export default class Sign extends React.PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  onNameChange = (text) => this.setState(() => ({ name: text }))
  onEmailChange = (text) => this.setState(() => ({ email: text }))
  onPasswordChange = (text) => this.setState(() => ({ password: text }))
  onConfirmPasswordChange = (text) => this.setState(() => ({ confirmPassword: text }))

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Avenir', fontSize: 40, textAlign: 'center', marginTop: 30, marginBottom: 80 }}>WELCOME!</Text>
        <View style={{ marginBottom: 50 }}>
          <TextInput
            value={this.state.name}
            placeholder="Name"
            onChangeText={this.onNameChange}
            style={{ width: 350, borderBottomWidth: 2, borderBottomColor: '#e6e6e6' }}
          />
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
          <TextInput
            value={this.state.confirmPassword}
            placeholder="Confirm Password"
            onChangeText={this.onConfirmPasswordChange}
            secureTextEntry={true}
            style={{ width: 350, borderBottomWidth: 2, borderBottomColor: '#e6e6e6' }}
          />
        </View>
        <View style={{ width: 250, marginLeft: 30 }}>
          <Button
            onPress={() => { }}
            title="Login"
            color="#2e06e9"
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Text>Already onboard?</Text>
          <Text style={{ color: '#368ef4' }}>Login</Text>
        </View>
      </View>
    );
  }
}

