import React from 'react';
import MapViewHOC from '../../../globals/MapViewHOC';
import styles from './styles';

export default class CommunityMap extends React.PureComponent {
    render() {
        const { requestMode, initialCoords, requests } = this.props;
        const requestMarkers = requests.map(request => {
            return {
                type: request.is_an_offer ? 'offer' : 'request',
                latlng: {
                    latitude: parseFloat(request.latitude),
                    longitude: parseFloat(request.longitude),
                },
                description: request.description,
                status: null,
            }
        });
        return (
            <MapViewHOC mainMap initialCoords={initialCoords} markers={requestMarkers} requestMode={requestMode} />
        );
    }
}