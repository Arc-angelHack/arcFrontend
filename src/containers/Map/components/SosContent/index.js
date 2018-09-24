import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from '../../../../globals/Avatar';
import styles from './styles'

export default class SosContent extends React.PureComponent {
    render() {
        return (
            <View style={styles.flex}>
                <Avatar style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>Brian Admas</Text>
                    <TextInput multiline style={styles.textInput} onChangeText={text => this.props.handleChangeText(text)} placeholder="Add Description" />
                    <View style={styles.row}>
                        <Icon name="plus-circle" size={22} />
                        <Text style={styles.descriptionText}>Hold to speak</Text>
                    </View>
                    {/* Figure this out later */}
                    {/* <View style={styles.row}>
                        <Icon name="plus-circle" size={22} />
                        <Text style={styles.descriptionText}>Add Description</Text>
                    </View> */}
                    <View style={styles.row}>
                        <Icon name="plus-circle" size={22} />
                        <Text style={styles.descriptionText}>Add Photo/Video</Text>
                    </View>
                </View>
            </View>
        );
    }
}
