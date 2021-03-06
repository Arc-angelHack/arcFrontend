import React, { Component } from 'react';
import { StyleSheet, Text, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider, connect } from "react-redux";
import { getRequests } from './src/actionCreators/requests';
import { getIncidents } from './src/actionCreators/incidents';
import { getSos } from './src/actionCreators/sos';
import MapScreen from "./src/screens/MapScreen";
import InformationScreen from './src/screens/InformationScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PersonalScreen from './src/screens/PersonalScreen';
import MedicalScreen from './src/screens/MedicalScreen';
import SOSScreen from './src/screens/SOSScreen';
import IncidentReportScreen from './src/screens/IncidentReportScreen';
import OfferScreen from './src/screens/OfferScreen';
import RequestScreen from './src/screens/RequestScreen';
import HeaderTitle from './src/globals/HeaderTitle';
import SignupWithEmailScreen from './src/screens/SignupWithEmail';
import SignupScreen from './src/screens/Signup';
import LoginScreen from './src/screens/Login';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import ManageCommunityOffersScreen from './src/screens/ManageCommunityOffersScreen';
import ManageCommunityRequestsScreen from './src/screens/ManageCommunityRequestsScreen';

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
  switch (name) {
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
    SOSScreen: { screen: SOSScreen },
    IncidentReport: { screen: IncidentReportScreen }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        title: "Downtown",
        headerTitleStyle,
      }
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
    Offer: { screen: OfferScreen },
    Request: { screen: RequestScreen },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      let title = '';
      let visibleTabs = true;
      if (routeName === 'Offer') {
        title = 'Offer Help';
        visibleTabs = false;
      }
      if (routeName === 'Request') {
        titel = 'Request Help';
        visibleTabs = false;
      }
      return {
        headerTitle: title ? title : <HeaderTitle onChange={this.handleCommunityScreen} />,
        headerTitleStyle,
        tabBarVisible: visibleTabs,
      }
    },
    headerLayoutPreset: 'center'
  }
);

const ManageCommunity = createMaterialTopTabNavigator(
  {
    ManageOffers: { screen: ManageCommunityOffersScreen },
    ManageRequests: { screen: ManageCommunityRequestsScreen },
  }, {
    initialRouteName: "ManageOffers",
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const name = (routeName === 'ManageOffers') ? 'My Offers' : 'My Requests';
        return <Text style={{
          color: '#1c1c1c',
          fontFamily: 'Avenir-Medium',
          fontSize: 18,
          opacity: focused ? 1 : 0.5
        }}>{name}</Text>;
      }
    }),
    tabBarOptions: {
      indicatorStyle: { backgroundColor: '#2e06e9' },
      style: { backgroundColor: '#fff' },
      labelStyle: { color: 'green' },
      tabStyle: { color: 'red' }
    }
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen },
    ManageCommunity: { screen: ManageCommunity },
    Medical: { screen: MedicalScreen },
    Personal: { screen: PersonalScreen },
  },
  {
    navigationOptions: ({ navigation }) => (
      {
        headerTitle: (navigation.state.routeName === 'ManageCommunity') ? 'Manage Community' : 'Profile',
        headerTitleStyle,
      }
    ),
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
      if (routes.length > 1) {
        return {
          tabBarVisible: routeName === 'Map' && routes.length && (routes[1].routeName === 'SOSScreen' || routes[1].routeName === '') ? false : true,
          tabBarIcon: (props) => <Icon name={getTabIcon(routeName)} size={24} color={props.tintColor} />,
          tabBarLabel: (props) => props.focused ? <Text style={styles.label}>{routeName}</Text> : null
        }
      }
      return {
        tabBarIcon: (props) => <Icon name={getTabIcon(routeName)} size={24} color={props.tintColor} />,
        tabBarLabel: (props) => props.focused ? <Text style={styles.label}>{routeName}</Text> : null
      }
    },
    tabBarOptions: {
      activeTintColor: "#2e06e9",
      inactiveTintColor: "#000000",
      inactiveBackgroundColor: "#ffffff",
      activeBackgroundColor: "#ffffff",
    }
  }
);

const AuthStack = createStackNavigator({
  Signup: SignupScreen,
  Login: LoginScreen,
  SignupWithEmail: SignupWithEmailScreen,

})
const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  Tabs: TabScreens
},
  {
    initialRouteName: 'AuthLoading',
  }
);

class App extends Component {
  componentWillReceiveProps = async (nextProps) => {
    if (nextProps.coords !== null && !this.props.coords) {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        this.props.getRequests(nextProps.coords, token);
        this.props.getIncidents(nextProps.coords);
        this.props.getSos(nextProps.coords);
      }
    }
    if (nextProps.token && !this.props.token && this.props.coords) {
      this.props.getRequests(nextProps.coords, nextProps.token);
      this.props.getIncidents(nextProps.coords);
      this.props.getSos(nextProps.coords);
    }
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  coords: state.app.coords,
  userId: state.app.userId,
  token: state.app.token,
});

const mapDispatchToProps = dispatch => ({
  getRequests: (coords, token) => {
    dispatch(getRequests(coords, token));
  },
  getIncidents: (coords) => {
    dispatch(getIncidents(coords));
  },
  getSos: (coords) => {
    dispatch(getSos(coords));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
