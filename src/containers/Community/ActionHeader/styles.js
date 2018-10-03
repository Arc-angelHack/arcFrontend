import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        maxHeight: 120
    },
    topRow: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
    },
    secondRow: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
    },
    requestButtonColor: {
        backgroundColor: '#ff6666'
    },
    requestButtonTextColor: {
        color: '#ffffff'
    },
    offerButtonColor: {
        backgroundColor: '#368ef4'
    },
    offerTextColor: {
        color: '#ffffff'
    },
    requestButtonAltColor: {
        backgroundColor: '#ffffff',
        borderColor: '#ff6666',
        borderWidth: 0.5,
    },
    requestButtonTextAltColor: {
       color: '#ff6666',
    },
    offerButtonAltColor: {
        backgroundColor: '#ffffff',
        borderColor: '#368ef4',
        borderWidth: 0.5,
    },
    offerTextAltColor: {
        color: '#368ef4'
    },
    text: {
        paddingTop: 3,
        fontSize: 13,
        textAlign: 'center',
    }
});

export default styles;
