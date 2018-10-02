import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    padding: 30
  },
  logo: {
    fontFamily: 'Avenir',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 80
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30
  },
  emailButton: {
    borderRadius: 4,
    width: 250,
    marginLeft: 30,
    marginTop: 30
  },
  text: {
    fontFamily: 'OpenSans',
    fontSize: 22
  },
  text__link: {
    fontFamily: 'OpenSans',
    fontSize: 22,
    color: '#368ef4'
  }
})