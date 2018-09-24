import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default class ActionButton extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Icon size={26} color="white" name={!this.props.showActions ? "plus" : "close"} />
            </TouchableOpacity>
        );
    }
}