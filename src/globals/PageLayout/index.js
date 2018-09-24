import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MapViewHOC from '../MapViewHOC';
import EmptyMap from '../EmptyMap';
import styles from './styles';

export default class PageLayout extends React.PureComponent {
    render() {
        const { coords, markers, showMap } = this.props;
        return (
            <View style={styles.container}>
                {showMap 
                    ? <MapViewHOC editMode sendCoords={this.props.sendCoords} initialCoords={coords} markers={[]} />
                    : <EmptyMap handlePress={this.props.handlePressMap} />
                }
                <View style={styles.content}>
                    {this.props.children}
                </View>
                <TouchableOpacity onPress={() => this.props.handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>POST</Text>
                </TouchableOpacity>
            </View>
        );
    }
}