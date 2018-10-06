import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PinupCard from '../../../globals/PinupCard';
import Avatar from '../../../globals/Avatar';
import styles from './styles'

export default class RequestContent extends React.PureComponent {
    state = {
        waterActive: false,
        foodActive: false,
        shelterActive: false,
        medicalActive: false,
        otherActive: false,
    };

    handleWater = () => this.setState({ waterActive: !this.state.waterActive });
    
    handleFood = () => this.setState({ foodActive: !this.state.foodActive });

    handleShelter = () => this.setState({ shelterActive: !this.state.shelterActive });

    handleMedical = () => this.setState({ medicalActive: !this.state.medicalActive });

    handleOther = () => this.setState({ otherActive: !this.state.otherActive });

    render() {
        const { waterActive, foodActive, shelterActive, medicalActive, otherActive } = this.state;
        return (
            <View style={styles.flex}>
                <Avatar style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>Brian Admas</Text>
                    <Text style={styles.textInput}>I need some help!</Text>
                    <View style={styles.actionRow}>
                        <PinupCard type="water" active={waterActive} requestMode onPress={this.handleWater} />
                        <PinupCard type="food" active={foodActive} requestMode onPress={this.handleFood} />
                        <PinupCard type="shelter" active={shelterActive} requestMode onPress={this.handleShelter} />
                        <PinupCard type="medical" active={medicalActive} requestMode onPress={this.handleMedical} />
                        <PinupCard type="other" active={otherActive} requestMode onPress={this.handleOther} />
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