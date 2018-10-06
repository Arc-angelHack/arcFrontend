import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 17,
    },
    container: {
        height: 40,
        width: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 3,
    },
    sosText: {
        fontFamily: 'SourceSansPro-Bold',
        color: "white",
        fontSize: 12,
    },
    box: {
        marginBottom: 3,
        height: 27,
        marginRight: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 3,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    boxText: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        textAlign: 'center',
        color: 'black'
    },
    image: {
        height: 13,
        width: 23,
    },
    transform: {
        transform: [
            { rotateX: '180deg'}
        ]
    }
});

export default styles;