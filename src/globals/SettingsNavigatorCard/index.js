import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

/*
  Expects:
    //navigation props
      navigateToFirstSetting
      navigateToSecondSetting

    //text props
      firstSetting
      secondSetting
*/


export default class SettingsNavigatorCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.setting} onPress={this.props.navigateToFirstSetting}>
          <Text style={styles.text__title}>{this.props.firstSetting}</Text>
          <Image style={styles.path} source={require('../../../assets/images/Path/path.png')} />
        </TouchableOpacity>
        <View style={styles.seperator__container}>
          <View style={styles.seperator} />
        </View>
        <TouchableOpacity style={styles.setting} onPress={this.props.navigateToSecondSetting}>
          <Text style={styles.text__title}>{this.props.secondSetting}</Text>
          <Image style={styles.path} source={require('../../../assets/images/Path/path.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}