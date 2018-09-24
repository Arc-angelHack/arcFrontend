import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    content: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    button: {
        height: 59,
        width: '100%',
        backgroundColor: '#2e06e9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 20,
        color: 'white',
    }
});

export default styles;