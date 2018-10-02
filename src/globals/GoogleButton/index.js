import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default class GoogleButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Icon name="google" size={60} color={'black'} />
      </TouchableOpacity>
    )
  }
}