import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default GenericButton = (props) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
)