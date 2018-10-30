import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { parseRequestMarkers } from '../utils/markerUtils';
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
        water: false,
        food: false,
        shelter: false,
        other: false,
        medical: false,
        forNumber: 0,
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
        const { text, coords, water, food, shelter, medical, other, forNumber } = this.state;
        const data = { water, food, shelter, medical, other };
        data.type = 'offer';
        data.peopleCount = forNumber + 1;
        if (coords === null) return;
        this.props.createRequest(text, coords, userId, token, data);
    };

    handleWater = () => this.setState({ water: !this.state.water });
    
    handleFood = () => this.setState({ food: !this.state.food });

    handleShelter = () => this.setState({ shelter: !this.state.shelter });

    handleMedical = () => this.setState({ medical: !this.state.medical });

    handleOther = () => this.setState({ other: !this.state.other });

    handleChangeOffer = val => {
        this.setState({ forNumber: ~~val })
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
                <OfferContent 
                    handleChangeText={this.handleChangeText} 
                    coords={this.props.coords} 
                    handleMedical={this.handleMedical}
                    handleFood={this.handleFood}
                    handleShelter={this.handleShelter}
                    handleOther={this.handleOther}
                    handleWater={this.handleWater}
                    handleChangeOffer={this.handleChangeOffer}
                    {...this.state}
                />
            </PageLayout>
        );
    }
}

const mapStateToProps = state => ({
    userId: state.app.userId,
    token: state.app.token,
    coords: state.app.coords,
    requests: state.requests.requests,
});

const mapDispatchToProps = dispatch => ({
    createRequest: (text, coords, userId, token, data) => {
        dispatch(createRequest(text, coords, userId, token, data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);