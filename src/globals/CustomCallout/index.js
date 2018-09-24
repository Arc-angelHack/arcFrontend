import React from 'react';
import { View, Text } from 'react-native';
import Avatar from '../Avatar';
import styles from './styles';

export default class CustomCallout extends React.PureComponent {
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.row}>
                    <Avatar callout />
                    <Text style={styles.header}>Brian Admas</Text>
                    <View style={styles.bar}>
                        <Text style={styles.barText}>{this.props.status}</Text>
                    </View>
                </View>
                <Text style={styles.paragraph}>
                    {this.props.description}
                </Text>
            </View>
        );
    }
}