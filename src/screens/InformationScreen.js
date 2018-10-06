import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import InformationBoard from '../containers/InformationBoard/components/InformationBoard';

const styles = StyleSheet.create({
  image: { height: 30, width: 30, marginRight: 16, borderRadius: 25 },
  title: { fontFamily: 'SourceSansPro-Regular' }
})


export default class InformationScreen extends React.PureComponent {
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity style={styles.image} onPress={() => { alert("you clicked me") }}>
        <Image
          style={styles.image}
          source={{ uri: 'https://lh3.googleusercontent.com/q3KvsCKoI45EJtUIpvE9oYTLqEktTieDoWOCtTg6KVgelnhK5jGn9Xhw9KqtCg2q3gdfwMHUEl0EWUVTNB44-dky' }}
        />
      </TouchableOpacity>
    ),
    headerStyle: styles.title
  };
  render() {
    return (
      <InformationBoard />
    );
  }
}


