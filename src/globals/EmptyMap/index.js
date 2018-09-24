import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'

export default class EmptyMap extends React.PureComponent {
    render() {
        return (
            <TouchableWithoutFeedback style={styles.container} onPress={this.props.handlePress}>
                <View style={styles.row}>
                    <Icon name="map-marker" size={24} />
                    <Text style={styles.text}>Add Location</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
