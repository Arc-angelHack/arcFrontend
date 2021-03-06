import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from '../../../../globals/Avatar';
import styles from './styles'

export default class IncidentReportContent extends React.PureComponent {
    render() {
        return (
            <View style={styles.flex}>
                <Avatar style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>Brian Admas</Text>
                    <Text style={styles.textInput}>I want to report an incident!</Text>
                    <View style={styles.row}>
                        <Icon name="plus-circle" size={22} />
                        <TextInput multiline style={styles.descriptionText} onChangeText={text => this.props.handleChangeText(text)} placeholder="Add Description" />
                    </View>
                    <View style={styles.row}>
                        <Icon name="plus-circle" size={22} />
                        <Text style={styles.descriptionText}>Add Photo/Video</Text>
                    </View>
                </View>
            </View>
        );
    }
}
