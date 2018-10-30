import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PinupCard from '../../../globals/PinupCard';
import Avatar from '../../../globals/Avatar';
import styles from './styles'

export default class RequestContent extends React.PureComponent {
    render() {
        const { water, food, shelter, medical, other } = this.props;
        return (
            <View style={styles.flex}>
                <Avatar style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>Brian Admas</Text>
                    <Text style={styles.textInput}>I need some help!</Text>
                    <View style={styles.actionRow}>
                        <PinupCard type="water" active={water} requestMode onPress={this.props.handleWater} />
                        <PinupCard type="food" active={food} requestMode onPress={this.props.handleFood} />
                        <PinupCard type="shelter" active={shelter} requestMode onPress={this.props.handleShelter} />
                        <PinupCard type="medical" active={medical} requestMode onPress={this.props.handleMedical} />
                        <PinupCard type="other" active={other} requestMode onPress={this.props.handleOther} />
                    </View>
                    <View style={styles.row}>
                        <Icon name="plus-circle" size={22} />
                        <TextInput placeholderTextColor="black" multiline style={styles.descriptionText} onChangeText={text => this.props.handleChangeText(text)} placeholder="Add Description" />
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