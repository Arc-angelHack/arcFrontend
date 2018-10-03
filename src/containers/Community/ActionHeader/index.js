import React from 'react';
import { View, Text } from 'react-native';
import Dropdown from '../../../globals/Dropdown';
import PinupCard from '../../../globals/PinupCard';
import styles from './styles';

export default class ActionHeader extends React.PureComponent {
    render() {
        const { requestMode, handleChangeRequestMode, forNumber, handleChangeNumber, waterActive, foodActive, shelterActive, otherActive, medicalActive, requests, incidents } = this.props;
        const requestOptions = ['Request', 'Offer'];
        const numberOptions = ['For 1','For 2','For 3','For 4','For 5','For 6','For 7','For 8','For 9']
        return (
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <View style={styles.row}>
                        <Dropdown
                            requestMode={requestMode}
                            buttonStyle={requestMode ? styles.requestButtonColor : styles.offerButtonColor} 
                            textStyle={[requestMode ? styles.requestButtonTextColor : styles.offerTextColor, styles.text]} 
                            options={requestOptions}
                            tickColor="white"
                            handleChange={handleChangeRequestMode}
                        />
                        <Dropdown
                            buttonStyle={requestMode ? styles.requestButtonAltColor : styles.offerButtonAltColor} 
                            textStyle={[requestMode ? styles.requestButtonTextAltColor : styles.offerTextAltColor, styles.text]} 
                            options={numberOptions}
                            tickColor={requestMode ? "red" : "blue"}
                            handleChange={handleChangeNumber}
                            forNumber={forNumber}
                        />
                    </View>
                    <Text style={[styles.text, requestMode ? styles.requestButtonTextAltColor : styles.offerTextAltColor]}>{requestMode ? requests.length : incidents.length} people {requestMode ? 'need' : 'offer to'} help</Text>
                </View>
                <View style={[styles.row, styles.secondRow]}>
                    <PinupCard type="water" active={waterActive} requestMode={requestMode} onPress={this.props.handleChangePinup} />
                    <PinupCard type="food" active={foodActive} requestMode={requestMode} onPress={this.props.handleChangePinup} />
                    <PinupCard type="shelter" active={shelterActive} requestMode={requestMode} onPress={this.props.handleChangePinup} />
                    <PinupCard type="medical" active={medicalActive} requestMode={requestMode} onPress={this.props.handleChangePinup} />
                    <PinupCard type="other" active={otherActive} requestMode={requestMode} onPress={this.props.handleChangePinup} />
                </View>
            </View>
        );
    }
}