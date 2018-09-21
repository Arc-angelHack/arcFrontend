import React from 'react';
import { ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';

export default class MainMap extends React.PureComponent {

    render() {
        const { initialCoords } = this.props;
        if (initialCoords  === null) {
            return <ActivityIndicator style={{ alignSelf: 'center' }} />
        }
        return (
            <MapView
                style={{ height: "100%" }}
                initialRegion={{
                latitude: initialCoords.latitude,
                longitude: initialCoords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
        );
    }
}
