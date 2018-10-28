import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { spreadMarkers } from '../../utils/markerUtils';
import MainMap from './components/MainMap';
import styles from './styles'

class Map extends React.PureComponent {
    render() {
        const { coords, incidents, sosrequests } = this.props;
        const markers = spreadMarkers(sosrequests, incidents);
        return (
            <View style={styles.flex}>
                <MainMap 
                    incidentCount={incidents.length} 
                    markers={markers} 
                    initialCoords={coords} 
                    navigation={this.props.navigation} 
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    coords: state.app.coords,
    sosrequests: state.sos.sosrequests,
    incidents: state.incidents.incidents,
})

export default connect(mapStateToProps, null)(Map);
