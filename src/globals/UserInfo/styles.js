import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginTop: 10,
    width: 100 + '%',
    height: 89,
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingBottom: 14,
    paddingLeft: 42
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 25
  },
  text: {
    flexDirection: 'column',
    marginLeft: 16,
    marginTop: 9,
    marginBottom: 10
  },
  text__header: {
    fontFamily: 'SourceSansPro-Semibold',
    fontSize: 20,
    letterSpacing: 0.9,
    color: '#1c1c1c'
  },
  text__subtitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    letterSpacing: 0.7,
    color: '#1c1c1c'
  }
})