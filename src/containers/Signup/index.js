import React from 'react';
import { View, Text, Button } from 'react-native';
import FacebookButton from '../../globals/FacebookButton';
import TwitterButton from '../../globals/TwitterButton';
import GoogleButton from '../../globals/GoogleButton';
import styles from './styles';
import GenericButton from '../../globals/GenericButton';
//TODO: Move styles into styles.js
//TODO: Navigation to Login Page
//TODO: Hook up to API


export default class Signup extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.logo}>ONEARC LOGO</Text>
        <Text style={styles.text}>Get started with</Text>
        <View style={styles.buttonContainer}>
          <FacebookButton />
          <GoogleButton />
          <TwitterButton />
        </View>
        <Text style={styles.text}>Or sign up with</Text>
        <GenericButton text={"Email"} onPress={this.props.signUp} />
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Text style={styles.text}>Already onboard?  <Text style={styles.text__link}>Login</Text></Text>
        </View>
      </View >
    );
  }
}

