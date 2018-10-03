import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ActionHeader from './ActionHeader';
import ActionButton from '../../globals/ActionButton';
import OptionButton from '../../globals/OptionButton';
import List from './List';
import CommunityMap from './CommunityMap';
import styles from './styles';

class Community extends React.PureComponent {
    state = {
        requestMode: true,
        forNumber: 0,
        showOpacity: false,
        waterActive: false,
        foodActive: false,
        shelterActive: false,
        medicalActive: false,
        otherActive: false,
    }

    handleChangeRequestMode = val => {
        val == 0 ? this.setState({ requestMode: true }) : this.setState({ requestMode: false });
    }

    handleChangeNumber = val => {
        this.setState({ forNumber: ~~val })
    }

    handleChangePinup = type => {
        const { waterActive, foodActive, shelterActive, medicalActive, otherActive } = this.state;
        switch (type) {
            case 'water':
                this.setState({ waterActive: !waterActive });
                break;
            case 'food':
                this.setState({ foodActive: !foodActive });
                break;
            case 'shelter':
                this.setState({ shelterActive: !shelterActive });
                break;
            case 'medical':
                this.setState({ medicalActive: !medicalActive });
                break;
            case 'other':
                this.setState({ otherActive: !otherActive });
                break;
            default:
                return;
        }
    }

    render() {
        const { 
            requestMode, 
            forNumber, 
            showOpacity, 
            waterActive, 
            foodActive, 
            shelterActive, 
            medicalActive, 
            otherActive 
        } = this.state;
        const { initialCoords, showList, incidents, requests } = this.props;
        return (
            <View style={styles.container}>
                <ActionHeader 
                    waterActive={waterActive} 
                    foodActive={foodActive} 
                    shelterActive={shelterActive} 
                    medicalActive={medicalActive} 
                    otherActive={otherActive} 
                    handleChangePinup={this.handleChangePinup} 
                    handleChangeNumber={this.handleChangeNumber} 
                    forNumber={forNumber} 
                    requestMode={requestMode}
                    requests={requests}
                    incidents={incidents}
                    handleChangeRequestMode={this.handleChangeRequestMode}
                />
                {showList ? <List {...this.state} cards={requestMode ? requests : incidents} /> : null}
                {!showList ? <CommunityMap requestMode={requestMode} initialCoords={initialCoords} incidents={incidents} requests={requests} /> : null}
                <View style={[!showOpacity ? styles.bottomRow : styles.opacity]}>
                    <View style={showOpacity ? styles.opacityLayer : null}/>
                    {showOpacity && <OptionButton communityMap offer showContext text="Offer Help" />}
                    {showOpacity && <OptionButton communityMap request showContext text="Request Help" />}
                    <ActionButton showActions={showOpacity} onPress={() => this.setState({ showOpacity: !showOpacity })} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    initialCoords: state.app.coords,
    showList: state.app.showList,
    incidents: state.incidents.incidents,
    requests: state.requests.requests,
});

export default connect(mapStateToProps, null)(Community);