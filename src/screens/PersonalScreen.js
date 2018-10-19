import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PersonalInfo from '../containers/PersonalInfo/components/PersonalInfo';

export default class PersonalScreen extends React.PureComponent {
  static navigationOptions = {
    headerTitle: 'Personal Info',
    headerRight: (
      <TouchableOpacity style={{ marginRight: 30, }} onPress={() => alert('This is a button!')}>
        <Text style={{ color: '#1c1c1c', fontSize: 20, fontFamily: 'SourceSansPro-Regular' }}>Edit</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <PersonalInfo />
    );
  }
}
