import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default class GoogleButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Image source={require('../../../assets/images/GoogleIcon/google.png')} style={styles.image} />
      </TouchableOpacity>
    )
  }
}