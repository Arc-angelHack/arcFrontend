import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { parseRequestMarkers } from '../utils/markerUtils';
import { createRequest } from '../actionCreators/requests';
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
        water: false,
        food: false,
        shelter: false,
        other: false,
        medical: false,
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

    handleWater = () => this.setState({ water: !this.state.water });
    
    handleFood = () => this.setState({ food: !this.state.food });

    handleShelter = () => this.setState({ shelter: !this.state.shelter });

    handleMedical = () => this.setState({ medical: !this.state.medical });

    handleOther = () => this.setState({ other: !this.state.other });

    handleSubmit = () => {
        const { userId, token } = this.props;
        const { text, coords, water, food, shelter, other, medical } = this.state;
        const data = { water, food, shelter, other, medical, type: 'request', peopleCount: 0 };
        if (coords === null) return;
        this.props.createRequest(text, coords, userId, token, data);
    };

    render() {
        const { showMap } = this.state;
        const { requests } = this.props;
        const markers = parseRequestMarkers(requests);
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
                <RequestContent 
                    handleChangeText={this.handleChangeText} 
                    coords={this.props.coords}
                    handleWater={this.handleWater}
                    handleFood={this.handleFood}
                    handleMedical={this.handleMedical}
                    handleOther={this.handleOther}
                    handleShelter={this.handleShelter}
                    {...this.state}
                />
            </PageLayout>
        );
    }
}

const mapStateToProps = state => ({
    coords: state.app.coords,
    token: state.app.token,
    userId: state.app.userId,
    requests: state.requests.requests,
});

const mapDispatchToProps = dispatch => ({
    createRequest: (text, coords, userId, token, data) => {
        dispatch(createRequest(text, coords, userId, token, data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestScreen);