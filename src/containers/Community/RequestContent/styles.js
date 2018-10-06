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
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
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
        paddingLeft: 15,
    },
    descriptionText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
    },
    actionRow: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: '80%',
    },
});

export default styles;