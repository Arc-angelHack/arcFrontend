import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from 'react-native-slider';
import { connect } from 'react-redux';
import SettingsCard from '../../../../globals/SettingsCard';
import { getPersonalSettings, getMedicalSettings } from '../../../../actionCreators/app';
import UserInfo from '../../../../globals/UserInfo';
import styles, { cardStyles } from './styles';


//TODO: Hook up to API


export class PersonalInfo extends React.Component {
  state = {
    sliderValue: 0
  };

  constructor(props) {
    super(props)
    this.getPersonalSettings();
  }

  getPersonalSettings = async () => {
    //await this.props.getPersonalSettings();
    await this.props.getMedicalSettings();
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
          <SettingsCard styles={cardStyles} settings={this.userPersonalConfig} />
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



const mapDispatchToProps = dispatch => ({
  getPersonalSettings: () => dispatch(getPersonalSettings()),
  getMedicalSettings: () => dispatch(getMedicalSettings()),
})

export default connect(undefined, mapDispatchToProps)(PersonalInfo)