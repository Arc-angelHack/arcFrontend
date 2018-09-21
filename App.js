import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from "react-redux";
import store from "./src/store.js";
import MapScreen from "./src/screens/MapScreen";
import InformationScreen from './src/screens/InformationScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const styles = StyleSheet.create({
  label: {
    color: "#2e06e9",
    fontSize: 12.2,
    textAlign: 'center',
    lineHeight: 16,
    paddingBottom: 3,
  },
});

const headerTitleStyle = {
  flex: 1,
  fontSize: 22,
  alignSelf: 'center',
  textAlign: 'center',
};

// TODO: Move to utils
const getTabIcon = name => {
  switch(name) {
    case 'Map':
      return 'map';
    case 'Community':
      return 'google-circles-communities';
    case 'Board':
      return 'clipboard-text';
    case 'Profile':
      return 'account-circle'
  }
};

const MapStack = createStackNavigator(
  {
    Map: { screen: MapScreen },
  },
  {
    navigationOptions: {
      title: "Downtown",
      headerTitleStyle,
    },
  },
)

const InformationStack = createStackNavigator(
  {
    Information: { screen: InformationScreen },
  },
  {
    navigationOptions: {
      title: "Update",
      headerTitleStyle,
    }
  }
);

const CommunityStack = createStackNavigator(
  {
    Community: { screen: CommunityScreen },
  },
  {
    navigationOptions: {
      title: "WIP",
      headerTitleStyle,
    }
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen },
  },
  {
    navigationOptions: { 
      title: "Profile",
      headerTitleStyle,
    },
  }
)

const TabScreens = createBottomTabNavigator(
  {
    Map: { screen: MapStack },
    Board: { screen: InformationStack },
    Community: { screen: CommunityStack },
    Profile: { screen: ProfileStack }
  },
  {
    initialRouteName: "Map",
    order: ["Map", "Board", "Community", "Profile"],
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state;
      return {
        tabBarIcon: (props) => <Icon name={getTabIcon(routeName)} size={24} color={props.tintColor} />,
        tabBarLabel: (props) => props.focused ? <Text style={styles.label}>{routeName}</Text> : null
      }
    },
    tabBarOptions:  {
      activeTintColor: "#2e06e9",
      inactiveTintColor: "#000000",
      inactiveBackgroundColor: "#ffffff",
      activeBackgroundColor: "#ffffff",
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabScreens />
      </Provider>
    );
  }
}
