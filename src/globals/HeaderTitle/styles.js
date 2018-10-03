import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftButton: {
        marginRight: -1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 99,
        borderWidth: 1,
        borderColor: '#2e06e9',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    rightButton: {
        marginLeft: -1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 99,
        borderWidth: 1,
        borderColor: '#2e06e9',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    blueTextColor: {
        color: '#2e06e9',
    },
    blueBackgroundColor: {
        backgroundColor: '#2e06e9',
    },
    whiteTextColor: {
        color: '#ffffff',
    },
    whiteBackgroundColor: {
        backgroundColor: '#ffffff',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    }
});

export default styles;