import React from 'react';
import { View, Text } from 'react-native';
import UserSummary from '../containers/UserSummary';

export default class ProfileScreen extends React.PureComponent {
  goToManageCommunity = () => {
    this.props.navigation.navigate('ManageCommunity')
  }
  goToMedical = () => {
    this.props.navigation.navigate('Medical')
  }
  goToPersonal = () => {
    this.props.navigation.navigate('Personal')
  }

  render() {
    return (
      <UserSummary goToMedical={this.goToMedical} goToPersonal={this.goToPersonal} goToManageCommunity={this.goToManageCommunity} />
    );
  }
}
