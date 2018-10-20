import React from 'react';
import { View, Text } from 'react-native';
import UserSummary from '../containers/UserSummary';

export default class ProfileScreen extends React.PureComponent {

  goToMedical = () => {
    this.props.navigation.navigate('Medical')
  }
  goToPersonal = () => {
    this.props.navigation.navigate('Personal')
  }

  render() {
    return (
      <UserSummary goToMedical={this.goToMedical} goToPersonal={this.goToPersonal} />
    );
  }
}
