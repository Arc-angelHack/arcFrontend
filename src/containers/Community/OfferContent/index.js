import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from '../../../globals/Avatar';
import Dropdown from '../../../globals/Dropdown';
import PinupCard from '../../../globals/PinupCard';
import styles from './styles'

export default class OfferContent extends React.PureComponent {
    state = {
        forNumber: 0,
        waterActive: false,
        foodActive: false,
        shelterActive: false,
        medicalActive: false,
        otherActive: false,
    };

    handleChangeOffer = val => {
        this.setState({ forNumber: ~~val })
    };

    handleWater = () => this.setState({ waterActive: !this.state.waterActive });
    
    handleFood = () => this.setState({ foodActive: !this.state.foodActive });

    handleShelter = () => this.setState({ shelterActive: !this.state.shelterActive });

    handleMedical = () => this.setState({ medicalActive: !this.state.medicalActive });

    handleOther = () => this.setState({ otherActive: !this.state.otherActive });

    render() {
        const { forNumber, waterActive, foodActive, shelterActive, medicalActive, otherActive } = this.state;
        const numberOptions = ['For 1','For 2','For 3','For 4','For 5','For 6','For 7','For 8','For 9'];
        return (
            <View style={styles.flex}>
                <Avatar style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>Brian Admas</Text>
                    <View style={[styles.flex, styles.spaceBetween]}>
                        <Text style={styles.textInput}>I want to offer my help!</Text>
                        <Dropdown handleChange={this.handleChangeOffer} forNumber={forNumber} buttonStyle={styles.btnStyle} textStyle={styles.textStyle} options={numberOptions} tickColor="blue" />
                    </View>
                    <View style={styles.actionRow}>
                        <PinupCard type="water" active={waterActive} requestMode={false} onPress={this.handleWater} />
                        <PinupCard type="food" active={foodActive} requestMode={false} onPress={this.handleFood} />
                        <PinupCard type="shelter" active={shelterActive} requestMode={false} onPress={this.handleShelter} />
                        <PinupCard type="medical" active={medicalActive} requestMode={false} onPress={this.handleMedical} />
                        <PinupCard type="other" active={otherActive} requestMode={false} onPress={this.handleOther} />
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