import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SettingsCard from '../../../../globals/SettingsCard';
import { getPersonalSettings, getMedicalSettings } from '../../../../actionCreators/app';
import UserInfo from '../../../../globals/UserInfo';
import styles, { cardStyles } from './styles';


//TODO: Hook up to API


export class MedicalInfo extends React.Component {
  constructor(props) {
    super(props)
    this.createSettingsArrays(this.props.medical);
  }

  createSettingsArrays = async (settings) => {
    await this.props.getMedicalSettings();
  }

  updateSettings = (settings) => {
    const {
      ['Allergies & Reactions']: allergies,
      ['Blood Type']: blood_type,
      ['Medication']: medication,
      ['Insurance']: insurance,
      ['Emergency Contact']: emergency_name,
      ['Phone']: emergency_phone
    } = settings;
    const unfilteredSettings = {
      allergies,
      blood_type,
      medication,
      insurance,
      emergency_name,
      emergency_phone
    }
    let payload = {}
    for (let setting in unfilteredSettings) {
      if (unfilteredSettings[setting] !== undefined) {
        payload[setting] = unfilteredSettings[setting]
      }
    }
    // the fun async stuff will go here later
  }

  /*
    {
      "blood_type":"",
      "allergies":"",
      "medication":"",
      "insurance":"",
      "emergency_name":"",
      "emergency_phone":""
    }
  */

  medical = [
    {
      title: 'Allergies & Reactions',
      value: this.props.settings.allergies
    },
    {
      title: 'Blood Type',
      value: this.props.settings.blood_type
    },
    {
      title: 'Medication',
      value: this.props.settings.medication
    },
    {
      title: 'Insurance',
      value: this.props.settings.insurance
    },
  ]
  contact = [
    {
      title: 'Emergency Contact',
      value: this.props.settings.emergency_name
    },
    {
      title: 'Phone',
      value: this.props.settings.emergency_phone
    },
  ]


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <UserInfo />
        </View>
        <View style={styles.card}>
          <SettingsCard styles={cardStyles} settings={this.medical} update={this.updateSettings} />
        </View>
        <View style={styles.card}>
          <SettingsCard styles={cardStyles} settings={this.contact} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.app.medicalSettings
})

const mapDispatchToProps = dispatch => ({
  getPersonalSettings: () => dispatch(getPersonalSettings()),
  getMedicalSettings: () => dispatch(getMedicalSettings()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MedicalInfo)