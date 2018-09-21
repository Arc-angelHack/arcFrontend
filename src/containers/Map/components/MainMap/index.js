import React from 'react';
import MapView from 'react-native-maps';

export default class MainMap extends React.PureComponent {

    render() {
        const { initialCoords } = this.props;
        console.log(initialCoords );
        if (initialCoords  === null) {
            return null;
        }
        console.log(initialCoords );
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
