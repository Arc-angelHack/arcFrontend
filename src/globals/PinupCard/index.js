import React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { capitalize } from '../../utils/textUtils';
import styles from './styles';

export default class PinupCard extends React.PureComponent {

    getImage = (type, active, requestMode) => {
        if (!active) {
            switch (type) {
                case 'water':
                    return require('../../../assets/images/WaterInactive/WaterInactive.png');
                case 'food':
                    return require('../../../assets/images/FoodInactive/FoodInactive.png');
                case 'shelter':
                    return require('../../../assets/images/ShelterInactive/ShelterInactive.png');
                case 'medical':
                    return require('../../../assets/images/MedicalInactive/MedicalInactive.png')
                case 'other':
                    return require('../../../assets/images/OtherInactive/OtherInactive.png')
            }
        }
        else if (requestMode) {
            switch (type) {
                case 'water':
                    return require('../../../assets/images/WaterActiveRequest/WaterActiveRequest.png');
                case 'food':
                    return require('../../../assets/images/FoodActiveRequest/FoodActiveRequest.png');
                case 'shelter':
                    return require('../../../assets/images/ShelterActiveRequest/ShelterActiveRequest.png');
                case 'medical':
                    return require('../../../assets/images/MedicalActiveRequest/MedicalActiveRequest.png')
                case 'other':
                    return require('../../../assets/images/OtherActiveRequest/OtherActiveRequest.png')
            }
        }
        switch (type) {
            case 'water':
                return require('../../../assets/images/WaterActiveOffer/WaterActiveOffer.png');
            case 'food':
                return require('../../../assets/images/FoodActiveOffer/FoodActiveOffer.png');
            case 'shelter':
                return require('../../../assets/images/ShelterActiveOffer/ShelterActiveOffer.png');
            case 'medical':
                return require('../../../assets/images/MedicalActiveOffer/MedicalActiveOffer.png')
            case 'other':
                return require('../../../assets/images/OtherActiveOffer/OtherActiveOffer.png')
        }
    }

    getTextColor = (active, requestMode) => {
        if (!active) {
            return styles.grey
        } else if (requestMode) {
            return styles.red;
        }
        return styles.blue;
    } 

    render() {
        const { type, active, requestMode, onPress} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => onPress(type)}>
                <View style={styles.center}>
                    <Image source={this.getImage(type, active, requestMode)} resizeMode="stretch" style={styles.image} />
                    <Text style={[styles.text, this.getTextColor(active, requestMode) ]}>{capitalize(type)}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}