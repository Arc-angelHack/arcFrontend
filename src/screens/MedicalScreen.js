import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MedicalInfo from '../containers/MedicalInfo/components/MedicalInfo';

export default class MedicalScreen extends React.PureComponent {
  static navigationOptions = {
    headerTitle: 'Medical ID',
    headerRight: (
      <TouchableOpacity style={{ marginRight: 30, }} onPress={() => alert('This is a button!')}>
        <Text style={{ color: '#1c1c1c', fontSize: 20, fontFamily: 'SourceSansPro-Regular' }}>Edit</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <MedicalInfo />
    );
  }
}
