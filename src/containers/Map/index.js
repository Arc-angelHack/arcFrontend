import React from 'react';
import { View, Text } from 'react-native';
import MainMap from './components/MainMap';
import styles from './styles'

export default class Map extends React.PureComponent {

    render() {
        return (
            <View style={styles.flex}>
                <MainMap />
            </View>
        );
    }
}
