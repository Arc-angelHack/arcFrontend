import React from 'react';
import InformationBoard from '../containers/InformationBoard/components/InformationBoard';
import Logout from '../containers/InformationBoard/components/Logout';


export default class InformationScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (<Logout navigation={navigation} />),
      headerStyle: { fontFamily: 'SourceSansPro-Regular' }
    }
  }
  render() {
    return (
      <InformationBoard />
    );
  }
}