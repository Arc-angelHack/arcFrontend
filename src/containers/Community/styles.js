import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomRow: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        marginRight: 17,
    },
    opacity: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: '100%',
        width: '100%',
    },
    opacityLayer: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        height: '100%',
        width: '100%',
        opacity: 0.7,
    }
});

export default styles;
