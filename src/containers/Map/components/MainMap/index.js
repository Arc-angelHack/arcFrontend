import React from 'react';
import { View } from 'react-native';
import MapViewHOC from '../../../../globals/MapViewHOC';
import ActionFooter from '../ActionFooter';

export default class MainMap extends React.PureComponent {
    state = {
        showActions: false,
    };

    handlePress = () => {
        this.setState({ showActions: !this.state.showActions });
    };

    render() {
        const { initialCoords, markers, incidentCount } = this.props;
        return (
            <View>
                <MapViewHOC mainMap opacity={this.state.showActions} markers={markers} initialCoords={initialCoords} />
                <ActionFooter incidentCount={incidentCount} initialCoords={initialCoords} navigation={this.props.navigation} showActions={this.state.showActions} handlePress={this.handlePress} />
            </View>
        );
    }
}
