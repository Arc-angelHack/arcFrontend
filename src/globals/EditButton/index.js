import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getPersonalSettings, getMedicalSettings, startEdit, endEdit } from '../../actionCreators/app';
import styles from './styles'

class Edit extends React.Component {
  startEdit = () => {
    !this.props.edit ? this.props.startEdit() : this.props.endEdit()

  }
  componentWillUnmount() {
    this.props.endEdit()
  }
  render() {
    return (
      <TouchableOpacity style={{ marginRight: 30, }} onPress={this.startEdit}>
        <Text style={{ color: '#1c1c1c', fontSize: 20, fontFamily: 'SourceSansPro-Regular' }}>Edit</Text>
      </TouchableOpacity>
    )
  }
}


const mapStateToProps = state => ({
  edit: state.app.edit
})

const mapDispatchToProps = dispatch => ({
  getPersonalSettings: () => dispatch(getPersonalSettings()),
  getMedicalSettings: () => dispatch(getMedicalSettings()),
  startEdit: () => dispatch(startEdit()),
  endEdit: () => dispatch(endEdit())
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)

