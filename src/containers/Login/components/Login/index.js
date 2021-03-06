import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import FacebookButton from '../../../../globals/FacebookButton';
import TwitterButton from '../../../../globals/TwitterButton';
import GoogleButton from '../../../../globals/GoogleButton';
import styles from './styles';
import GenericButton from '../../../../globals/GenericButton';


//TODO: Hook up to API


export class Login extends React.PureComponent {
  state = {
    email: '',
    password: '',
  }

  manualLogin = async () => {
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }
    await this.props.manualLogin(credentials);
  }
  onEmailChange = (text) => this.setState(() => ({ email: text }))
  onPasswordChange = (text) => this.setState(() => ({ password: text }))

  render() {
    return (

      <View style={styles.screenContainer}>
        <KeyboardAvoidingView behavior="position" enabled>
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
          <View behavior="height" style={{ marginTop: 10, marginBottom: 10, alignItems: 'stretch' }}>
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
            <GenericButton text={"Login"} onPress={this.manualLogin} />
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <Text style={styles.text}>Need an account? </Text>
              <TouchableOpacity onPress={this.props.signUp}><Text style={styles.text__link}>Sign up</Text></TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>

    );
  }
}



export default (Login)