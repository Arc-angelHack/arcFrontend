import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Slider from 'react-native-slider';
import { format } from 'date-fns'
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
  };

  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {

    console.log('Personal Info: Finished Updating. Running functions on update.');
    console.log(this.props.settings.birth_date);

    for (let setting in this.props.settings) {
      if (this.props.settings[setting] !== prevProps.settings[setting]) {
        console.log(`${setting} was not the same. New: ${this.props.settings[setting]} Old: ${prevProps.settings[setting]}`)
        console.log('[Personal Info]: ', '*Update Function*: New props from redux arent the same. Setting State.')
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
        break;
      }
    }

  }

  updateSettings = async (settings) => {
    const {
      ['Date of birth']: birth_date,
      ['Home City']: city,
      ['Phone']: phone,
    } = settings;
    const unfilteredSettings = {
      birth_date: '1989-02-20T00:00:00.000Z',
      city,
      phone,
      gps: !!this.state.sliderValue
    }
    let payload = {}
    for (let setting in unfilteredSettings) {
      if (unfilteredSettings[setting] !== undefined) {
        payload[setting] = unfilteredSettings[setting]
      }
    }
    await this.props.updatePersonalSettings(payload)
  }

  setSliderValue = () => {
    this.setState((prevState) => ({
      sliderValue: prevState.sliderValue === 0 ? 1 : 0
    }))
  }

  render() {
    const { sliderValue } = this.state;
    console.log('[Personal Info]: Rendering with this state: ', this.state)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.userCard}>
          <UserInfo />
        </View>
        <View style={styles.card}>
          <SettingsCard styles={cardStyles} settings={this.state.personal} name='[Personals]: ' update={this.updateSettings} />
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Allow GPS</Text>
          <TouchableOpacity onPress={this.setSliderValue}>
            <Slider
              value={sliderValue}
              step={1}
              trackStyle={this.state.sliderValue ? styles.trackStyle : styles.offTrackStyle}
              thumbStyle={styles.thumbStyle}
              minimumTrackTintColor={'#2e06e9'}
              maximumTrackTintColor={'#D3D3D3'}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}


const mapStateToProps = state => ({
  settings: {
    ...state.app.personalSettings,
    birth_date: format(state.app.personalSettings.birth_date, 'YYYY-MM-DD')
  }
})

const mapDispatchToProps = dispatch => ({
  getPersonalSettings: () => dispatch(getPersonalSettings()),
  updatePersonalSettings: (payload) => dispatch(updatePersonalSettings(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)