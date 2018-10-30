import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from '../../../globals/Avatar';
import Dropdown from '../../../globals/Dropdown';
import PinupCard from '../../../globals/PinupCard';
import styles from './styles'

export default class OfferContent extends React.PureComponent {
    render() {
        const { forNumber, water, food, shelter, medical, other } = this.props;
        const numberOptions = ['For 1','For 2','For 3','For 4','For 5','For 6','For 7','For 8','For 9'];
        return (
            <View style={styles.flex}>
                <Avatar style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>Brian Admas</Text>
                    <View style={[styles.flex, styles.spaceBetween]}>
                        <Text style={styles.textInput}>I want to offer my help!</Text>
                        <Dropdown handleChange={this.props.handleChangeOffer} forNumber={forNumber} buttonStyle={styles.btnStyle} textStyle={styles.textStyle} options={numberOptions} tickColor="blue" />
                    </View>
                    <View style={styles.actionRow}>
                        <PinupCard type="water" active={water} requestMode={false} onPress={this.props.handleWater} />
                        <PinupCard type="food" active={food} requestMode={false} onPress={this.props.handleFood} />
                        <PinupCard type="shelter" active={shelter} requestMode={false} onPress={this.props.handleShelter} />
                        <PinupCard type="medical" active={medical} requestMode={false} onPress={this.props.handleMedical} />
                        <PinupCard type="other" active={other} requestMode={false} onPress={this.props.handleOther} />
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