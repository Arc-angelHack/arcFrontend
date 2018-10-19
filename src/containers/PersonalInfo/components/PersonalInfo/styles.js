import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 10,
    alignItems: 'center',
    padding: 24,
    justifyContent: 'space-between'
  },
  userCard: {
    marginBottom: 10
  },
  trackStyle: {
    height: 15,
    width: 40,
    borderRadius: 25
  },
  text: {
    color: '#1c1c1c',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
  },
  thumbStyle: {
    backgroundColor: '#2e06e9'
  }
})

export const cardStyles = StyleSheet.create({
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: 'space-between',
    marginLeft: 28,
    marginBottom: 8,
    marginTop: 8,
  },
  text__title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: '#9b9b9b'
  },
  text__value: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: '#1c1c1c'
  }
})