import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 4,
        shadowColor: 'black',
        shadowRadius: 3,
        elevation: 2,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 7,
        marginRight: 7,
    },
    center: {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
    },
    image: {
        height: 20,
        width: 20,
    },
    text: {
        fontSize: 8
    },
    grey: {
        color: '#757575'
    },
    blue: {
        color: '#368ef4'
    },
    red: {
        color: '#ff6666'
    }
});

export default styles;