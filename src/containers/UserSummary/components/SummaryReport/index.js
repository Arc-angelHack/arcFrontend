import React from 'react';
import { View, Text } from 'react-native';
import UserInfo from '../../../../globals/UserInfo';
import styles from './styles';

export default class SummaryReport extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UserInfo />
        <View style={styles.seperator__container}>
          <View style={styles.seperator} />
        </View>
        <View style={styles.reports}>
          <View style={styles.offers}>
            <Text style={styles.text__header}>12</Text>
            <Text style={styles.text__subtitle}>offers</Text>
          </View>
          <View style={styles.borderRequests} />
          <View style={styles.requests}>
            <Text style={styles.text__header}>5</Text>
            <Text style={styles.text__subtitle}>requests</Text>
          </View>
          <View style={styles.borderIncidents} />
          <View style={styles.incidents}>
            <Text style={styles.text__header}>12</Text>
            <Text style={styles.text__subtitle}>incidents reported</Text>
          </View>
        </View>
      </View>
    )
  }
}