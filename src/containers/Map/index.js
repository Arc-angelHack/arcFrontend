import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import MainMap from './components/MainMap';
import styles from './styles'

class Map extends React.PureComponent {
    render() {
        const { coords } = this.props;
        return (
            <View style={styles.flex}>
                <MainMap initialCoords={coords} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    coords: state.app.coords,
})

export default connect(mapStateToProps, null)(Map);
