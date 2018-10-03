import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 132,
        width: '95%',
        borderRadius: 5,
        elevation: 2,
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 25,
        paddingLeft: 25,
        marginLeft: 10,
        marginRight: 10,
    },
    leftHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 16,
        fontFamily: 'SourceSansPro-Regular',
        color: 'black',
    },
    timestamp: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 12,
        lineHeight: 20,
        color: 'black',
    },
    paragraph: {
        paddingTop: 10,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 14,
        lineHeight: 20,
    },
    buttonText: {
        paddingTop: 20,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 14,
        lineHeight: 16,
        color: '#4527a0',
    }
});

export default styles;