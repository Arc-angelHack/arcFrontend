import React from 'react';
import { View } from 'react-native';
import SettingsNavigatorCard from '../../globals/SettingsNavigatorCard';
import SummaryReport from './components/SummaryReport';
import styles from './styles';

//Todo:  DYNAMIC Summary Report
//Todo:  Hook up navigation


export default class UserSummary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.report}>
          <SummaryReport />
        </View>
        <View style={styles.card}>
          <SettingsNavigatorCard
            firstSetting="Current SOS Req"
            secondSetting="Manage Community"
            navigateToFirstSetting={() => { }}
            navigateToSecondSetting={() => { }}
          />
        </View>
        <View style={styles.card}>
          <SettingsNavigatorCard
            firstSetting="Medical ID"
            secondSetting="Personal Info"
            navigateToFirstSetting={this.props.goToMedical}
            navigateToSecondSetting={this.props.goToPersonal}
          />
        </View>
      </View>
    )
  }
}