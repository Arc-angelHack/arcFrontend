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
                    ? <MapViewHOC markers={markers} editMode sendCoords={this.props.sendCoords} initialCoords={coords} markers={[]} />
                    : <EmptyMap handlePress={this.props.handlePressMap} />
                }
                <View style={styles.content}>
                    {this.props.children}
                </View>
                <TouchableOpacity 
                    onPress={() => {
                        this.props.handleSubmit()
                        this.props.navigation.goBack()
                    }
                    } 
                    style={showMap ? styles.button : styles.buttonDisabled}
                >
                    <Text style={showMap ? styles.buttonText : styles.disabledText}>POST</Text>
                </TouchableOpacity>
            </View>
        );
    }
}