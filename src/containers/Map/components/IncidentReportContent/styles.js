import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
    },
    avatar: {
        marginLeft: 20,
        marginTop: 20
    },
    content: {
        marginLeft: 30,
        width: 248,
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
    },
    textInput: {
        paddingTop: 20,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 20,
        color: 'black',
        paddingLeft: 0,
    },
    descriptionText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
    }
});

export default styles;