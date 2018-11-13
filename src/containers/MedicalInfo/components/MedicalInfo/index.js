import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SettingsCard from '../../../../globals/SettingsCard';
import { getPersonalSettings, getMedicalSettings, updateMedicalSettings } from '../../../../actionCreators/app';
import UserInfo from '../../../../globals/UserInfo';
import styles, { cardStyles } from './styles';


//TODO: Hook up to API


export class MedicalInfo extends React.Component {
  state = {
    medical: [
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
    ],
    contact: [
      {
        title: 'Emergency Contact',
        value: this.props.settings.emergency_name
      },
      {
        title: 'Phone',
        value: this.props.settings.emergency_phone
      },
    ]
  }
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (this.props.settings !== prevProps.settings) {
      console.log('MedicalInfo got settings from redux');
      // console.log(this.state.medical)
      console.log(this.props.settings.allergies);
      // console.log(prevProps.settings);
      console.log('Medical Info gonna set state')
      this.setState((prevProps) => {
        return {
          medical: [
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
          ],
          contact: [
            {
              title: 'Emergency Contact',
              value: this.props.settings.emergency_name
            },
            {
              title: 'Phone',
              value: this.props.settings.emergency_phone
            },
          ]
        }
      })
    }
  }
  updateSettings = async (settings) => {
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
    await this.props.updateMedicalSettings(payload)
  }




  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <UserInfo />
        </View>
        <View style={styles.card}>
          <SettingsCard styles={cardStyles} settings={this.state.medical} update={this.updateSettings} />
        </View>
        <View style={styles.card}>
          {/* <SettingsCard styles={cardStyles} settings={this.state.contact} update={this.updateSettings} /> */}
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
  updateMedicalSettings: (payload) => dispatch(updateMedicalSettings(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(MedicalInfo)