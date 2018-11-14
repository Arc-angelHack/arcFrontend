import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getPersonalSettings } from '../actionCreators/app';
import PersonalInfo from '../containers/PersonalInfo/components/PersonalInfo';
import EditButton from '../globals/EditButton'

export class PersonalScreen extends React.PureComponent {
  static navigationOptions = {
    headerTitle: 'Personal Info',
    headerRight: (<EditButton />)
  }
  componentDidMount() {
    this.createSettingsArrays();
  }

  createSettingsArrays = async (settings) => {
    await this.props.getPersonalSettings();
  }
  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = state => ({
  settings: state.app.personalSettings
})

const mapDispatchToProps = dispatch => ({
  getPersonalSettings: () => dispatch(getPersonalSettings()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalScreen)