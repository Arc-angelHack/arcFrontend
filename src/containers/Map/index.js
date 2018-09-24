import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { spreadMarkers } from '../../utils/markerUtils';
import MainMap from './components/MainMap';
import styles from './styles'

class Map extends React.PureComponent {
    render() {
        const { coords, requests, incidents } = this.props;
        const markers = spreadMarkers(requests, incidents);
        console.log(incidents.length)
        return (
            <View style={styles.flex}>
                <MainMap incidentCount={incidents.length} markers={markers} initialCoords={coords} navigation={this.props.navigation} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    coords: state.app.coords,
    requests: state.requests.requests,
    incidents: state.incidents.incidents,
})

export default connect(mapStateToProps, null)(Map);
