import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Components } from 'exponent';

class RunningScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#f2d300"
                    barStyle="dark-content"
                />
                <View style={styles.toolbar}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../images/map-icon.png')} style={styles.logoicon} />
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../images/logonike.png')} style={styles.logosmall} />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../images/lock-icon.png')} style={styles.logoicon} />
                    </View>
                </View>
                <ScrollView>
                    
                    <View style={{paddingVertical: 10, paddingHorizontal: 50}}>
                        <TouchableOpacity style={styles.buttonRedWrapper}>
                            <View style={styles.buttonRed} shadowColor={'#000'} shadowOffset={{width: 10, height: 10}} shadowOpacity={0.6} shadowRadius={30}>
                                <Text style={styles.buttonRedText}>START</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    toolbar: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: 85,
        paddingTop: 25,
        backgroundColor: '#f2d300'
    },
    logosmall: {
        width: 40,
        height: 15,
    },
    logoicon: {
        height: 35,
        width: 35
    },
    text: {
        backgroundColor: 'transparent',
        fontFamily: 'bebas-neue',
    },
    buttonRed: {
        backgroundColor: '#f02733',
        borderRadius: 30,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRedText: {
        color: '#fff',
        fontFamily: 'bebas-neue',
        fontSize: 24
    },
});

export default RunningScreen;