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
    this.state = { settings: {} }
    this.props.settings.map(configObject => {
      this.state.settings[configObject.title] = configObject.value
    })
    console.log(this.props.name, 'Settings Card Constructed.')
  }

  loadData = () => {
    const settings = {};
    this.props.settings.map(configObject => {
      settings[configObject.title] = configObject.value
    });
    for (let setting in settings) {
      if (settings[setting] !== this.state.settings[setting]) {
        console.log(this.props.name, '*Update Function*: Data was not the same. Setting State')
        this.setState(() => ({ settings }))
        break;
      }
    }
  }

  handleTextChange = (title, text) => {
    this.setState((prevState) => {
      if (prevState) {
        return ({
          settings: {
            ...prevState.settings,
            [title]: text
          }
        })
      }
    })
  }
  refHolder = {}

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.name, 'just finished rendering. Running Update functions: ')
    if (this.props.settings !== prevProps.settings) {
      this.loadData();
      // times when updates happen:
      //parent fetches last data from server:
      //this component actually renders new text
      //parent posts and returns new data from server:
    } else {
      console.log(this.props.name, 'Did not recieve new props from parent.')
    }
    if (prevProps.edit === true && this.props.edit === false) {
      this.props.update(this.state.settings);
    } else {
      console.log(this.props.name, 'Did not run update (from a finished edit).')
    }
  }

  navigateToSetting = (setting) => { }

  render() {
    console.log(this.props.name, 'Rendering with these settings:  ', this.state.settings)
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
                  editable={!!this.props.edit}
                  value={this.state.settings[config.title]} />
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
                    editable={!!this.props.edit}
                    value={this.state.settings[config.title]} />
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