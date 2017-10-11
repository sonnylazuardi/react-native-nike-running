import Exponent from 'expo';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Font, AppLoading } from 'expo';

import SplashScreen from './src/components/SplashScreen';
import HomeScreen from './src/components/HomeScreen';
import HistoryScreen from './src/components/HistoryScreen';
import BeginRunScreen from './src/components/BeginRunScreen';
import RunningScreen from './src/components/RunningScreen';

import {
    createRouter,
    NavigationProvider,
    StackNavigation,
    NavigationStyles
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
    splash: () => SplashScreen,
    home: () => HomeScreen,
    begin: () => BeginRunScreen,
    running: () => RunningScreen,
    history: () => HistoryScreen
}));

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
            return <AppLoading />;
        }

        return (
            <NavigationProvider router={Router}>
                <StackNavigation initialRoute="splash" />
            </NavigationProvider>
        );
    }
}

Exponent.registerRootComponent(App);
