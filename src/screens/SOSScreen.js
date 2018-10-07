import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { spreadMarkers } from '../utils/markerUtils';
import { createRequest } from '../actionCreators/requests';
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

    handleSubmit = () => {
        const { userId, token } = this.props;
        const { text, coords } = this.state;
        if (coords === null) return;
        this.props.createNewSos(text, coords, userId, token);
    };

    render() {
        const { showMap } = this.state;
        const { requests, incidents } = this.props;
        const markers = spreadMarkers(requests, incidents);
        return (
            <PageLayout 
                handleSubmit={this.handleSubmit} 
                markers={markers} 
                coords={this.props.coords} 
                showMap={showMap} 
                handlePressMap={this.handlePressMap} 
                sendCoords={this.sendCoords}
                navigation={this.props.navigation}
            >
                <Soscontent handleChangeText={this.handleChangeText} coords={this.props.coords} />
            </PageLayout>
        );
    }
}

const mapStateToProps = state => ({
    coords: state.app.coords,
    userId: state.app.userId,
    token: state.app.token,
    requests: state.requests.requests,
    incidents: state.incidents.incidents,
});

const mapDispatchToProps = dispatch => ({
    createNewSos: (text, coords, userId, token) => {
        dispatch(createRequest(text, coords, userId, token))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SOSScreen);
