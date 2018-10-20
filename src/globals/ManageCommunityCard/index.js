import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import Avatar from '../Avatar';
import styles from './styles';

export default class ManageCommunityCard extends React.PureComponent {
  render() {
    const { description, timestamp, mode, numberOfPeople } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.leftHeader}>
            <Avatar />
            <Text style={styles.headerText}>Brian Adams</Text>
          </View>
          <Text style={styles.timestamp}>{`${timestamp} mins`}</Text>
        </View>
        <Text style={styles.paragraph}>{description}</Text>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.buttonText__people}>{mode === 'OFFER' ? `${numberOfPeople} are interested` : `${numberOfPeople} can help`}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText}>END {mode}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}