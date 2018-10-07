import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { spreadMarkers } from '../utils/markerUtils';
import { createRequest } from '../actionCreators/requests';
import OfferContent from '../containers/Community/OfferContent'
import PageLayout from '../globals/PageLayout';

class OfferScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Offer Help',
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
        const { text, coords, } = this.state;
        if (coords === null) return;
        this.props.createNewRequest(text, coords, userId, token);
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
                <OfferContent handleChangeText={this.handleChangeText} coords={this.props.coords} />
            </PageLayout>
        );
    }
}

const mapStateToProps = state => ({
    coords: state.app.coords,
    requests: state.requests.requests,
    incidents: state.incidents.incidents,
});

const mapDispatchToProps = dispatch => ({
    createNewRequest: (text, coords, userId, token) => {
        dispatch(createRequest(text, coords, userId, token))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);