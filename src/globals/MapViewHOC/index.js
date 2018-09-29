import React from 'react';
import { ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapMarker from '../MapMarker';
import { mapStyle } from '../../consts';

export default class MapViewHOC extends React.PureComponent {
    componentDidMount = () => {
        const { initialCoords } = this.props;
        if (initialCoords !== null) {
            this.props.sendCoords(initialCoords);
        } 
    }

    render() {
        const { markers, initialCoords } = this.props;
        if (initialCoords  === null) {
            return <ActivityIndicator style={{ alignSelf: 'center' }} />
        }
        return (
            <MapView
                minZoomLevel={15}
                style={[this.props.mainMap ? { height: "100%" } : { height: 226 }, this.props.opacity ? {opacity: 0.3} : null]}
                initialRegion={{
                    latitude: initialCoords.latitude,
                    longitude: initialCoords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
            >
                {!this.props.editMode && markers.map((marker, index) => {
                    return (
                        <MapMarker key={index} type={marker.type} latlng={marker.latlng} description={marker.description} status={marker.status} />
                    );
                })}
                {this.props.editMode && (
                    <Marker
                        draggable
                        coordinate={initialCoords}
                        onDragEnd={(e) => this.props.sendCoords(e.nativeEvent.coordinate)}
                        image={require('../../../assets/images/Locator/Locator.png')}
                    />
                )}
            </MapView>
        );
    }
}
