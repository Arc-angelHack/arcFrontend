import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        marginBottom: 25,
    },
    header: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'SourceSansPro-Semibold'
    },
    subHeader: {
        color: 'black',
        fontSize: 13,
        fontFamily: 'SourceSansPro-Semibold'
    },
    opacityPadding: {
        paddingBottom: 10,
    },
    opacityText: {
        opacity: 0.3,
    },
    flexStart: {
        alignSelf: 'flex-start'
    }
});

export default styles;
