import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { spreadMarkers } from '../utils/markerUtils'; 
import { createIncident } from '../actionCreators/incidents';
import PageLayout from '../globals/PageLayout';
import IncidentReportContent from '../containers/Map/components/IncidentReportContent';

class IncidentReportScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Incident Report',
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
        const { token, userId } = this.props;
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
                navigation={this.props.navigation} 
                markers={markers} 
                coords={this.props.coords} 
                showMap={showMap} 
                handlePressMap={this.handlePressMap} 
                sendCoords={this.sendCoords} 
                handleSubmit={this.handleSubmit}
            >
                <IncidentReportContent handleChangeText={this.handleChangeText} />
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

export default connect(mapStateToProps, mapDispatchToProps)(IncidentReportScreen);
