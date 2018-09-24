import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { spreadMarkers } from '../utils/markerUtils';
import PageLayout from '../globals/PageLayout';
import Soscontent from '../containers/Map/components/SosContent';

class SOSScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'SOS Request',
        headerRight: <View />,
        tabBarVisible: false,
    }

    state = {
        text: '',
        showMap: false,
        coords: null,
    }

    handleChangeText = text => {
        this.setState({ text })
    }

    handlePressMap = () => {
        this.setState({ showMap: true });
    }

    sendCoords = coords => {
        this.setState({ coords })
    }

    render() {
        const { showMap } = this.state;
        const { requests, incidents } = this.props;
        const markers = spreadMarkers(requests, incidents);
        return (
            <PageLayout markers={markers} coords={this.props.coords} showMap={showMap} handlePressMap={this.handlePressMap} sendCoords={this.sendCoords}>
                <Soscontent handleChangeText={this.handleChangeText}/>
            </PageLayout>
        );
    }
}

const mapStateToProps = state => ({
    coords: state.app.coords,
    requests: state.requests.requests,
    incidents: state.incidents.incidents,
});

export default connect(mapStateToProps, null)(SOSScreen);
