import React from "react";
import Slide from "react-native-slider";
import { AppRegistry, StyleSheet, View, Text, Slider } from "react-native";

export default class SliderExample extends React.Component {
  state = {
    value: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <Slide
          value={this.state.value}
          step={1}
          maximumValue={1}
          onValueChange={value => this.setState({ value })}
        />
        <Text>
          Value: {this.state.value}
        </Text>
        <Slider
          step={1}
          maximumValue={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
