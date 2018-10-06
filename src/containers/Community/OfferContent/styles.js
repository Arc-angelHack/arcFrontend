import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
    },
    avatar: {
        marginLeft: 20,
        marginTop: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
    },
    name: {
        paddingTop: 20,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 14,
        paddingLeft: 15,
    },
    textInput: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 20,
        color: 'black',
        paddingLeft: 0,
        paddingRight: 20,
    },
    descriptionText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
    },
    btnStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#368ef4',
        borderWidth: 0.5,
    },
    textStyle: {
        color: '#368ef4'
    },
    actionRow: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
});

export default styles;