import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import Avatar from '../Avatar';
import styles from './styles';

export default class Card extends React.PureComponent {
    render() {
        const { description, timestamp } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.leftHeader}>
                        <Avatar />
                        <Text style={styles.headerText}>Adrien Smith</Text>
                    </View>
                    <Text style={styles.timestamp}>{format(timestamp, 'hh:mm a, MMM D')}</Text>
                </View>
                <Text style={styles.paragraph}>{description}</Text>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>SEE ON MAP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>GIVE OFFER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}