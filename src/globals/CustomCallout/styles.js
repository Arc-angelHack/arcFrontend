import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 14,
        lineHeight: 20,
        color: '#686868'
    },
    bar: {
        height: 16,
        backgroundColor: '#E88277',
        borderRadius: 3,
        paddingLeft: 5,
        paddingRight: 8,
        marginLeft: 25,
        justifyContent:'center',
        alignItems: 'center',
    },
    barText: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'SourceSansPro-Regular',
        textAlign: 'center',
    },
    paragraph: {
        width: 185,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 12,
        color: '#686868'
    }
});

export default styles;