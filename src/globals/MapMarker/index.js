import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import CustomCallout from '../CustomCallout';

export default class MapMarker extends React.PureComponent {
    render() {
        const icon = this.props.type === 'sos' ? require('../../../assets/images/SOS/SOS@4X.png') : require('../../../assets/images/Incident/Incident@4X.png');
        return (
            <Marker coordinate={this.props.latlng} image={icon} >
                <Callout>
                    <CustomCallout description={this.props.description} status={this.props.status} />
                </Callout>
            </Marker>

        );
    }
}