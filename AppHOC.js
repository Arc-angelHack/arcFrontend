import App from './App';
import store from "./src/store.js";
import { getGeoLocation } from './src/actionCreators/app'
import React from 'react';

class AppHOC extends React.PureComponent {
    componentWillMount = async () => {
        store.dispatch(getGeoLocation());
    };

    render() {
        return <App store={store} />
    }
}

export default AppHOC;