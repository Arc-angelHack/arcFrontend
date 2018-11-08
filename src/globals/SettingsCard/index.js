import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
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
  //edit state
    //navigation prop to dynamically create edit setting page (use params to pass the data with rn-navigation)
      this.props.navigateToSetting

    //text props
      firstSetting
      secondSetting
*/


export class SettingsCard extends React.Component {
  constructor(props) {
    super(props)

  }

  handleTextChange = (title, text) => {
    this.setState((prevState) => ({
      settings: {
        ...prevState.settings,
        [title]: text
      }
    }))
  }
  refHolder = {}

  componentDidUpdate(prevProps) {
    if (prevProps.edit === false && this.props.edit === true) {
      this.update(this.state.settings);
    }
  }

  navigateToSetting = (setting) => { }

  render() {
    return (
      <View style={this.props.styles.container}>
        {this.props.settings.map((config, i) => {
          return (i === 0) ? (
            <View key={i}>
              <TouchableOpacity style={this.props.styles.setting} onPress={() => { if (this.props.edit) { this.refHolder[config.title].focus() } }}>
                <Text style={this.props.styles.text__title}>{config.title}</Text>
                <TextInput
                  ref={(input) => { this.refHolder[config.title] = input }}
                  style={this.props.styles.text__value}
                  underlineColorAndroid='transparent'
                  onChangeText={text => this.handleTextChange(config.title, text)}
                  editable={!!this.props.edit}>
                  {config.value}
                </TextInput>
              </TouchableOpacity>
              <View style={this.props.styles.seperator__container}>
                <View style={this.props.styles.seperator} />
              </View>
            </View>
          ) : (
              <View key={i}>
                <View style={this.props.styles.seperator__container}>
                  <View style={this.props.styles.seperator} />
                </View>
                <TouchableOpacity style={this.props.styles.setting} onPress={() => { if (this.props.edit) { this.refHolder[config.title].focus() } }}>
                  <Text style={this.props.styles.text__title}>{config.title}</Text>
                  <TextInput
                    ref={(input) => { this.refHolder[config.title] = input }}
                    style={this.props.styles.text__value}
                    underlineColorAndroid='transparent'
                    onChangeText={text => this.handleTextChange(config.title, text)}
                    editable={!!this.props.edit}>
                    {config.value}
                  </TextInput>
                </TouchableOpacity>
              </View>
            )
        })}
      </View>

    )
  }
}

const mapStateToProps = state => ({
  edit: state.app.edit,
})

export default connect(mapStateToProps)(SettingsCard)