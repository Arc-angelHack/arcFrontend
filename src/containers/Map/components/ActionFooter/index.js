import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from '../../../../globals/ActionButton';
import OptionButton from '../../../../globals/OptionButton';
import getCity from '../../../../utils/geocodeUtils/getCity';
import styles from './styles';

export default class ActionFooter extends React.PureComponent {
    state = {
        address: '',
    }
    componentWillReceiveProps = async nextProps => {
        const { initialCoords } = this.props;
        if (!this.state.address && nextProps.initialCoords !== null) {
            this.setState({ address: await getCity(nextProps.initialCoords.latitude, nextProps.initialCoords.longitude)})
        }
    }

    render() {
        const opacityText = this.props.showActions ? styles.opacityText : null;
        const opacityPadding = this.props.showActions ? styles.opacityPadding : null;
        const flexStart = this.props.showActions ? styles.flexStart : null;
        return (
            <View style={[styles.bottom, !this.props.showActions ? styles.row : styles.column]}>
                {/* Below is temporary workaround for styling bug, will remove ternary operator later */}
                {!this.props.showActions ? (
                    <View style={[styles.textContainer, opacityPadding, flexStart]}>
                        <Text style={[styles.header, opacityText]}>{this.state.address}</Text>
                        <Text style={[styles.subHeader, opacityText]}>{this.props.incidentCount} incidents</Text>
                    </View>
                )
                : null}
                {this.props.showActions ? <OptionButton onPress={() => this.props.navigation.navigate('IncidentReport')} showContext text="Report Inicidents" icon="alert" color="#ffb736" /> : null}
                {this.props.showActions ? <OptionButton onPress={() => this.props.navigation.navigate('SOSScreen')} showContext text="SOS request" icon="SOS" color="#f44336" /> : null}
                <ActionButton showActions={this.props.showActions} onPress={this.props.handlePress} />
            </View>
        );
    }
}