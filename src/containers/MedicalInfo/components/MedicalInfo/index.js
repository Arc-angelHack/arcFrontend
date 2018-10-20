import React from 'react';
import { View } from 'react-native';
import SettingsCard from '../../../../globals/SettingsCard';
import UserInfo from '../../../../globals/UserInfo';
import styles, { cardStyles } from './styles';


//TODO: Hook up to API


export class MedicalInfo extends React.Component {
  userProfileConfig = [
    {
      title: 'Allergies & Reactions',
      value: 'Peniciplin -  hives, rash and itching'
    },
    {
      title: 'Blood Type',
      value: 'AB -'
    },
    {
      title: 'Medication',
      value: 'Metformin'
    },
    {
      title: 'Insurance',
      value: 'Medicare - 1EG4-TE5-MK72'
    },
  ]

  userContactConfig = [
    {
      title: 'Emergency Contact',
      value: 'Charles Adams'
    },
    {
      title: 'Phone',
      value: '415-205-7858'
    },
  ]

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <UserInfo />
        </View>
        <View style={styles.card}>
          <SettingsCard styles={cardStyles} settings={this.userProfileConfig} />
        </View>
        <View style={styles.card}>
          <SettingsCard styles={cardStyles} settings={this.userContactConfig} />
        </View>
      </View>
    );
  }
}



export default MedicalInfo