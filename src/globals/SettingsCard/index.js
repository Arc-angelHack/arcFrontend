import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

/*
  Expects:
    //styles object to style card elements
      styles.setting
      styles.seperator
      styles.seperator__container
      styles.text__title
      styles.text__value
    //settings array to generate cards
      settings

    //navigation prop to dynamically create edit setting page (use params to pass the data with rn-navigation)
      this.props.navigateToSetting

    //text props
      firstSetting
      secondSetting
*/


export default class SettingsCard extends React.Component {
  constructor(props) {
    super(props)
  }

  navigateToSetting = (setting) => { }

  render() {
    return (
      <View style={this.props.styles.container}>
        {this.props.settings.map((config, i) => {
          return (i === 0) ? (
            <View>
              <TouchableOpacity style={this.props.styles.setting} onPress={() => this.navigateToSetting(config.title)}>
                <Text style={this.props.styles.text__title}>{config.title}</Text>
                <Text style={this.props.styles.text__value}>{config.value}</Text>
              </TouchableOpacity>
              <View style={this.props.styles.seperator__container}>
                <View style={this.props.styles.seperator} />
              </View>
            </View>
          ) : (
              <View>
                <View style={this.props.styles.seperator__container}>
                  <View style={this.props.styles.seperator} />
                </View>
                <TouchableOpacity style={this.props.styles.setting} onPress={() => this.navigateToSetting(config.title)}>
                  <Text style={this.props.styles.text__title}>{config.title}</Text>
                  <Text style={this.props.styles.text__value}>{config.value}</Text>
                </TouchableOpacity>
              </View>
            )
        })}
      </View>

    )
  }
}