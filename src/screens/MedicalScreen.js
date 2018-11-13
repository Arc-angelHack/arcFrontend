import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getMedicalSettings } from '../actionCreators/app';
import MedicalInfo from '../containers/MedicalInfo/components/MedicalInfo';
import EditButton from '../globals/EditButton'

export class MedicalScreen extends React.PureComponent {
  static navigationOptions = {
    headerTitle: 'Medical ID',
    headerRight: (<EditButton />)
  }
  componentDidMount() {
    this.createSettingsArrays();
  }

  createSettingsArrays = async (settings) => {
    await this.props.getMedicalSettings();
  }
  render() {
    return (
      <MedicalInfo />
    );
  }
}


const mapStateToProps = state => ({
  settings: state.app.medicalSettings
})

const mapDispatchToProps = dispatch => ({
  getMedicalSettings: () => dispatch(getMedicalSettings()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MedicalScreen)