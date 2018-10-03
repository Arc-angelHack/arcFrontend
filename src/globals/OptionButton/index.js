import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default class ActionButton extends React.PureComponent {
    render() {
        if (this.props.communityMap) {
            const offerImage = require('../../../assets/images/OfferHelp/OfferHelp.png');
            const requestImage = require('../../../assets/images/RequestHelp/RequestHelp.png');
            return (
                <View style={styles.wrapper}>
                    {this.props.showContext ? (
                        <View style={styles.box}>
                            <Text style={styles.boxText}>{this.props.text}</Text>
                        </View>
                    ): null}
                    <TouchableOpacity onPress={this.props.onPress} style={[styles.container, { backgroundColor: this.props.color }]}>
                        {this.props.offer ? <Image source={offerImage} style={styles.image} /> : <Image source={requestImage} style={styles.image} />} 
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={styles.wrapper}>
                {this.props.showContext ? (
                    <View style={styles.box}>
                        <Text style={styles.boxText}>{this.props.text}</Text>
                    </View>
                ): null}
                <TouchableOpacity onPress={this.props.onPress} style={[styles.container, { backgroundColor: this.props.color }]}>
                    {this.props.icon !== 'SOS' ? <Icon size={22} color="white" name={this.props.icon} /> : <Text style={styles.sosText}>SOS</Text>} 
                </TouchableOpacity>
            </View>
        );
    }
}