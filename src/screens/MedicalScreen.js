import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MedicalInfo from '../containers/MedicalInfo/components/MedicalInfo';
import EditButton from '../globals/EditButton'

export default class MedicalScreen extends React.PureComponent {
  static navigationOptions = {
    headerTitle: 'Medical ID',
    headerRight: (<EditButton />)
  }
  render() {
    return (
      <MedicalInfo />
    );
  }
}
