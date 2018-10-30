import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import getAddress from '../../../../utils/geocodeUtils/getAddress';
import Avatar from '../../../../globals/Avatar';
import styles from './styles'

export default class SosContent extends React.PureComponent {
    state = {
        location: {
            formattedAddress: '',
            city: '',
            state: '',
            zip: '',
            street: '',
        },
    }

    componentWillMount = async () => {
        const { coords } = this.props;
        this.setState({ location: await getAddress(coords.latitude, coords.longitude) })
    };

    render() {
        const { location } = this.state;
        return (
            <View style={styles.flex}>
                <Avatar style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>Brian Admas</Text>
                    <Text style={styles.textInput}>I need emergency help! My location is <Text style={styles.underline}>{this.state.location.formattedAddress}</Text>.</Text>
                    <View style={styles.row}>
                        <Icon name="plus-circle" size={22} />
                        <Text style={styles.descriptionText}>Hold to speak</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="plus-circle" size={22} />
                        <TextInput multiline style={styles.descriptionText} onChangeText={text => this.props.handleChangeText(text, location)} placeholder="Add Description" />
                    </View>
                    <View style={styles.row}>
                        <Icon name="plus-circle" size={22} />
                        <Text style={styles.descriptionText}>Add Photo/Video</Text>
                    </View>
                </View>
            </View>
        );
    }
}
