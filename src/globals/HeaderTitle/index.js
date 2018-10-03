import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { showCommunityList, hideCommunityList } from '../../actionCreators/app';
import styles from './styles';

class HeaderTitle extends React.PureComponent {
    render() {
        const { showList, handleShowList, handleHideList } = this.props;
        return (
            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleShowList()} style={[styles.leftButton, showList ? styles.blueBackgroundColor : styles.whiteBackgroundColor ]}>
                    <Text style={[styles.text, showList ? styles.whiteTextColor : styles.blueTextColor]}>List</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleHideList()} style={[styles.rightButton, showList ? styles.whiteBackgroundColor : styles.blueBackgroundColor ]}>
                    <Text style={[styles.text, showList ? styles.blueTextColor : styles.whiteTextColor]}>Map</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    showList: state.app.showList
});

const mapDispatchToProps = dispatch => ({
    handleShowList: () => {
        dispatch(showCommunityList())
    },
    handleHideList: () => {
        dispatch(hideCommunityList())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTitle);