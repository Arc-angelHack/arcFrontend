import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { spreadMarkers } from '../utils/markerUtils';
import { createIncident } from '../actionCreators/incidents';
import RequestContent from '../containers/Community/RequestContent';
import PageLayout from '../globals/PageLayout';

class RequestScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Request Help',
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

    sendCoords = (coords) => {
        this.setState({ coords })
    }

    handleSubmit = () => {
        const { userId, token } = this.props;
        const { text, coords } = this.state;
        if (coords === null) return;
        this.props.createNewIncident(text, coords, userId, token);
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
                <RequestContent handleChangeText={this.handleChangeText} coords={this.props.coords} />
            </PageLayout>
        );
    }
}

const mapStateToProps = state => ({
    coords: state.app.coords,
    token: state.app.token,
    userId: state.app.userId,
    requests: state.requests.requests,
    incidents: state.incidents.incidents,
});

const mapDispatchToProps = dispatch => ({
    createNewIncident: (text, coords, userId, token) => {
        dispatch(createIncident(text, coords, userId, token))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestScreen);