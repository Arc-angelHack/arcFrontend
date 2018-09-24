import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 226,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dadada'
    },
    text: {
        paddingLeft: 15,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        color: '#000000'
    },
    row: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row' 
    }
});

export default styles;