import React from 'react';
import MapViewHOC from '../../../globals/MapViewHOC';
import styles from './styles';

export default class CommunityMap extends React.PureComponent {
    render() {
        const { requestMode, initialCoords, incidents, requests } = this.props;
        const requestMarkers = requests.map(request => {
            return {
                type: 'request',
                latlng: {
                    latitude: parseFloat(request.latitude),
                    longitude: parseFloat(request.longitude),
                },
                description: request.description,
                status: null,
            }
        });
        const incidentMarkers = incidents.map(incident => {
            return {
                type: 'incident',
                latlng: {
                    latitude: parseFloat(incident.latitude),
                    longitude: parseFloat(incident.longitude),
                },
                description: incident.description,
                status: incident.status,
            }
        });
        return (
            <MapViewHOC mainMap initialCoords={initialCoords} markers={requestMode ? requestMarkers : incidentMarkers} requestMode={requestMode} />
        );
    }
}