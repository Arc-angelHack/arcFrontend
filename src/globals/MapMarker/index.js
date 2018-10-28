import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import CustomCallout from '../CustomCallout';

export default class MapMarker extends React.PureComponent {
    getIcon = (type, community) => {
        if (community === undefined) {
            switch (type) {
                case 'sos':
                    return require('../../../assets/images/SOS/SOS.png');
                case 'incident':
                    return require('../../../assets/images/Incident/Incident.png');
            }
        }
        switch (type) {
            case 'request':
                return require('../../../assets/images/RequestPoint/RequestPoint.png');
            case 'incident':
                return require('../../../assets/images/IncidentPoint/IncidentPoint.png');
        }

    }

    render() {
        const icon = this.getIcon(this.props.type, this.props.community);
        return (
            <Marker coordinate={this.props.latlng} image={icon} >
                <Callout>
                    <CustomCallout description={this.props.description} status={this.props.finished} />
                </Callout>
            </Marker>

        );
    }
}