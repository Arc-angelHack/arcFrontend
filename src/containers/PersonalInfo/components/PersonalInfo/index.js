import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Slider from 'react-native-slider';
import SettingsCard from '../../../../globals/SettingsCard';
import { getPersonalSettings, updatePersonalSettings } from '../../../../actionCreators/app';
import UserInfo from '../../../../globals/UserInfo';
import styles, { cardStyles } from './styles';


//TODO: Hook up to API
/*
{
          birth_date: '',
          city: '',
          state: '',
          phone: '',
          gps: '',
        }
*/



export class PersonalInfo extends React.Component {
  state = {
    sliderValue: (this.props.settings.gps === undefined ? 0 : 1),
    personal: [
      {
        title: 'Date of birth',
        value: this.props.settings.birth_date
      },
      {
        title: 'Home City ',
        value: this.props.settings.city
      },
      {
        title: 'Phone',
        value: this.props.settings.phone
      },
      {
        title: 'Email',
        value: 'brianadamas@gmail.com'
      }
    ]
  };

  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (this.props.settings !== prevProps.settings) {
      console.log('Personal Info got settings from redux');
      console.log(this.props.settings.birth_date);
      console.log('Personal Info gonna set state')
      this.setState((prevProps) => {
        return {
          personal: [
            {
              title: 'Date of birth',
              value: this.props.settings.birth_date
            },
            {
              title: 'Home City',
              value: this.props.settings.city
            },
            {
              title: 'Phone',
              value: this.props.settings.phone
            },
            {
              title: 'Email',
              value: 'brianadamas@gmail.com'
            }
          ]
        }
      })
    }
  }

  updateSettings = async (settings) => {
    const {
      ['Date of birth']: birth_date,
      ['Home City']: city,
      ['Phone']: phone,
    } = settings;
    const unfilteredSettings = {
      birth_date,
      city,
      phone
    }
    let payload = {}
    for (let setting in unfilteredSettings) {
      if (unfilteredSettings[setting] !== undefined) {
        payload[setting] = unfilteredSettings[setting]
      }
    }
    await this.props.updatePersonalSettings(payload)
  }
  /*
  {
    blood_type: '',
    medication: '',
    insurance: '',
    allergies: '',
    emergency_name: '',
    emergency_phone: ''
  }
  */

  userPersonalConfig = [
    {
      title: 'Date of birth',
      value: 'Feb 20, 1989'
    },
    {
      title: 'Home City ',
      value: 'San Francisco'
    },
    {
      title: 'Phone',
      value: '415-204-7848'
    },
    {
      title: 'Email',
      value: 'brianadamas@gmail.com'
    }
  ]

  setSliderValue = () => {
    this.setState((prevState) => ({
      sliderValue: prevState.sliderValue === 0 ? 1 : 0
    }))
  }

  render() {
    const { sliderValue } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.userCard}>
          <UserInfo />
        </View>
        <View style={styles.card}>
          <SettingsCard styles={cardStyles} settings={this.state.personal} update={this.updateSettings} />
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Allow GPS</Text>
          <TouchableOpacity onPress={this.setSliderValue}>
            <Slider
              value={sliderValue}
              step={1}
              trackStyle={sliderValue ? styles.trackStyle : styles.offTrackStyle}
              thumbStyle={styles.thumbStyle}
              minimumTrackTintColor={'#2e06e9'}
              maximumTrackTintColor={'#D3D3D3'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  settings: state.app.personalSettings
})

const mapDispatchToProps = dispatch => ({
  getPersonalSettings: () => dispatch(getPersonalSettings()),
  updatePersonalSettings: (payload) => dispatch(updatePersonalSettings(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)