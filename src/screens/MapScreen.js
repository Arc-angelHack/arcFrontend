import React from 'react';
import Map from '../containers/Map';

export default class MapScreen extends React.PureComponent {

    render() {
        return (
            <Map navigation={this.props.navigation} />
        );
    }
}

