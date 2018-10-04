import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    padding: 58
  },
  logo: {
    height: 81,
    width: 245,
    marginBottom: 33
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
    marginRight: 5
  },
  emailButton: {
    borderRadius: 4,
    width: 250,
    marginLeft: 30,
    marginTop: 30
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