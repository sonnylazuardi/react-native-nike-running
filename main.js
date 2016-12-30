import Exponent from 'exponent';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Font, Components } from 'exponent';

import SplashScreen from './src/components/SplashScreen';
import HomeScreen from './src/components/HomeScreen';
import HistoryScreen from './src/components/HistoryScreen';
import BeginRunScreen from './src/components/BeginRunScreen';
import RunningScreen from './src/components/RunningScreen';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }

    async componentWillMount() {
        await Font.loadAsync({
            'bebas-neue': require('./src/fonts/BebasNeue.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        if (!this.state.fontLoaded) {
            return <Components.AppLoading />;
        }

        return (
            <RunningScreen />
        );
    }
}

Exponent.registerRootComponent(App);
