import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default class UserInfo extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Image source={require('../../../assets/images/GoogleIcon/google.png')} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.text__header}>Brian Adams</Text>
          <Text style={styles.text__subtitle}>Feb 20, 1989 (29)</Text>
        </View>
      </View>
    )
  }
}