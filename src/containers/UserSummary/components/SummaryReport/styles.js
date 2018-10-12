import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  reports: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  seperator__container: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  seperator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(194, 194, 194, 0.4)',
    width: 325
  },
  offers: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 9,
    paddingBottom: 10,
    width: 120
  },
  borderRequests: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(194, 194, 194, 0.4)',
    marginRight: 28,
    height: 63
  },
  requests: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
  },
  borderIncidents: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(194, 194, 194, 0.4)',
    marginLeft: 27,
    height: 63
  },
  incidents: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 9,
    paddingBottom: 10
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