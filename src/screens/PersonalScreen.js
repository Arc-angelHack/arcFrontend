import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PersonalInfo from '../containers/PersonalInfo/components/PersonalInfo';
import EditButton from '../globals/EditButton'

export default class PersonalScreen extends React.PureComponent {
  static navigationOptions = {
    headerTitle: 'Personal Info',
    headerRight: (<EditButton />)
  }
  render() {
    return (
      <PersonalInfo />
    );
  }
}
