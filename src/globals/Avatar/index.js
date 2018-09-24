import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export default class Avatar extends React.PureComponent {
    render() {
        // Temporary url until we can pass down props
        return (
            <Image 
                style={[styles.image, this.props.style]}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                resizeMethod={this.props.callout ? null : "resize"}
                resizeMode={this.props.callout ? "cover" : null}
            />
        );
    }
}