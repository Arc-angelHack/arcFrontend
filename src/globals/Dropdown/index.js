import React from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default class Dropdown extends React.PureComponent {
    render() {
        const { options, buttonStyle, textStyle, tickColor, requestMode, forNumber } = this.props;
        let text = options[0];
        if (requestMode !== undefined) {
            text = requestMode ? 'Request' : 'Offer';
        }
        if (forNumber !== undefined) {
            text = `For ${~~forNumber + 1}`
        }
        return (
            <ModalDropdown 
                style={[styles.btn, buttonStyle]} 
                textStyle={textStyle}
                dropdownStyle={styles.dropdown}
                options={options} 
                defaultValue={options[0]}
                onSelect={val => this.props.handleChange(val)}
            >   
                <View style={styles.row}>
                    <Text style={this.props.textStyle}>{text}</Text>
                    <Icon name="menu-down" color={tickColor} size={22} />
                </View>
            </ModalDropdown>
        );
    }
}