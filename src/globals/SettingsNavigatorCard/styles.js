import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    width: 100 + '%',
    justifyContent: 'center'
  },
  seperator__container: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  seperator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(194, 194, 194, 0.4)',
    width: 360
  },
  setting: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginLeft: 42,
    marginBottom: 15,
    marginRight: 29,
    marginTop: 15,
  },
  text__title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    color: '#1c1c1c'
  }
})