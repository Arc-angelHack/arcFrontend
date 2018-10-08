import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 25
  },
  headerContainer: {
    justifyContent: 'center'
  },
  heading: {
    color: 'black',
    fontFamily: 'Avenir-Medium',
    fontSize: 25, fontWeight: "bold",
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 65
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 15,
  },
  placeholder: {
    fontFamily: 'OpenSans-Regular',
    width: 350,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#e6e6e6',
    height: 63
  },
  text__input: {
    width: 350,
    borderBottomWidth: 2,
    borderBottomColor: '#e6e6e6',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingBottom: 0,
    textAlign: "justify"
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: 'black',
    fontSize: 17
  },
  text__link: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 17,
    color: '#368ef4'
  }
})