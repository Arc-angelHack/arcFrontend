import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

//TODO: Move styles into styles.js
//TODO: Navigation to Login Page
//TODO: Hook up to API


export class SignupWithEmail extends React.PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  //RegEx Validation Placeholders
  onNameChange = (text) => this.setState(() => ({ name: text }))
  onEmailChange = (text) => this.setState(() => ({ email: text }))
  onPasswordChange = (text) => this.setState(() => ({ password: text }))
  onConfirmPasswordChange = (text) => this.setState(() => ({ confirmPassword: text }))

  signupWithEmail = async () => {
    const user = {
      firstname: this.state.name,
      lastname: "",
      email: this.state.email,
      password: this.state.password,
    };
    await this.props.signupWithEmail(user);
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.heading}>WELCOME!</Text>
        <View style={{ marginBottom: 50 }}>
          <TextInput
            returnKeyType="next"
            enablesReturnKeyAutomatically={true}
            value={this.state.name}
            placeholder="Name"
            onChangeText={this.onNameChange}
            autoCapitalize="none"
            style={this.state.name ? styles.text__input : styles.placeholder}
          />
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
            returnKeyType="next"
            autoCapitalize="none"
            value={this.state.password}
            placeholder="Password"
            onChangeText={this.onPasswordChange}
            secureTextEntry={true}
            style={this.state.password ? styles.text__input : styles.placeholder}
          />
          <TextInput
            returnKeyType="go"
            autoCapitalize="none"
            value={this.state.confirmPassword}
            placeholder="Confirm Password"
            onChangeText={this.onConfirmPasswordChange}
            secureTextEntry={true}
            style={this.state.confirmPassword ? styles.text__input : styles.placeholder}
          />
        </View>
        <GenericButton text={"Sign up"} onPress={() => this.signupWithEmail()} />
        <View style={styles.onboard}>
          <Text style={styles.onboard__text}>Already onboard? </Text>
          <TouchableOpacity onPress={this.props.login}><Text style={styles.text__link}>Login</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default (SignupWithEmail);