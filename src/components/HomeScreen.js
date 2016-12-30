import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { Components } from 'exponent';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />
                <Components.MapView
                    style={{flex: 1}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <View style={styles.toolbar}>
                    <Components.LinearGradient
                        colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0)']}
                        style={{height: 50, position: 'absolute', top: 0, left: 0, right: 0}} />
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../images/left-icon.png')} style={styles.logoicon} />
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../images/logonike.png')} style={styles.logosmall} />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../images/right-icon.png')} style={styles.logoicon} />
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.card} shadowColor={'#000'} shadowOffset={{width: 10, height: 10}} shadowOpacity={0.4} shadowRadius={30}>
                        <View style={styles.cardHeader}>
                            <View style={{flex: 1, alignItems: 'flex-start'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={require('../images/profile-icon.png')} style={styles.profileicon} />
                                    <Text style={{fontFamily: 'bebas-neue', fontSize: 18, color: '#282a2c'}}>PROFILE</Text>
                                </View>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontFamily: 'bebas-neue', fontSize: 18, color: '#adadad'}}>ON FIRE! 🔥</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardContent}>
                            <Image source={require('../images/profile-picture.jpg')} style={styles.profilepicture}/>
                            <Text style={{fontFamily: 'bebas-neue', fontSize: 64, color: '#ec242e'}}>12.035</Text>
                            <Image source={require('../images/profile-icon-red.png')} style={styles.profileiconred} />
                        </View>
                        <View style={styles.cardContent}>
                            <View style={{flex: 1}}>
                                <Text style={styles.cardLabel}>TOTAL DISTANCE</Text>
                                <Text style={styles.cardText}>27.81<Text style={styles.cardTextSmall}>KM</Text></Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.cardLabel}>TOTAL TIME</Text>
                                <Text style={styles.cardText}>21:55:11</Text>
                            </View>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={{flex: 1}}>
                                <Text style={styles.cardLabel}>AVG PACE</Text>
                                <Text style={styles.cardText}>6'42"</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.cardLabel}>DAILY AVG</Text>
                                <Text style={styles.cardText}>1.855</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', height: 120, paddingHorizontal: 25}}>
                            <View style={{flex: 1}}>
                                <View style={{height: 68, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 5}}>
                                    <View style={{height: 20, width: 15, borderRadius: 7, backgroundColor: '#f02733'}}>
                                    </View>
                                </View>
                                <Text style={styles.graphText}>M</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{height: 68, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 5}}>
                                    <View style={{height: 30, width: 15, borderRadius: 7, backgroundColor: '#60ba52'}}>
                                    </View>
                                </View>
                                <Text style={styles.graphText}>T</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{height: 68, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 5}}>
                                    <View style={{height: 40, width: 15, borderRadius: 7, backgroundColor: '#60ba52'}}>
                                    </View>
                                </View>
                                <Text style={styles.graphText}>W</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{height: 68, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 5}}>
                                    <View style={{height: 54, width: 15, borderRadius: 7, backgroundColor: '#60ba52'}}>
                                    </View>
                                </View>
                                <Text style={styles.graphText}>T</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{height: 68, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 5}}>
                                    <View style={{height: 52, width: 15, borderRadius: 7, backgroundColor: '#60ba52'}}>
                                    </View>
                                </View>
                                <Text style={styles.graphText}>F</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{height: 68}}>
                                </View>
                                <Text style={styles.graphText}>S</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{height: 68}}>
                                </View>
                                <Text style={styles.graphText}>S</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Components.LinearGradient
                        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)']}
                        style={{height: 200, position: 'absolute', bottom: 0, left: 0, right: 0}} />
                    <TouchableOpacity style={styles.buttonRedWrapper}>
                        <View style={styles.buttonRed} shadowColor={'#000'} shadowOffset={{width: 10, height: 10}} shadowOpacity={0.6} shadowRadius={30}>
                            <Text style={styles.buttonRedText}>BEGIN RUN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25
    },
    logosmall: {
        width: 40,
        height: 15,
    },
    logoicon: {
        height: 30,
        width: 30
    },
    toolbar: {
        position: 'absolute',
        top: 25,
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: 50
    },
    footer: {
        padding: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 60
    },
    content: {
        padding: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 35
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
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 400,
        marginBottom: 135,
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 25,
        paddingBottom: 0,
    },
    profileicon: {
        height: 30,
        width: 30
    },
    profileiconred: {
        height: 30,
        width: 30,
        marginTop: 8
    },
    cardContent: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        marginVertical: 8,
        justifyContent: 'center'
    },
    profilepicture: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        marginTop: 5
    },
    cardLabel: {
        fontFamily: 'bebas-neue',
        fontSize: 18,
        color: '#adadad'
    },
    cardText: {
        fontFamily: 'bebas-neue',
        fontSize: 30
    },
    cardTextSmall: {
        fontFamily: 'bebas-neue',
        fontSize: 13
    },
    graphText: {
        textAlign: 'center',
        fontFamily: 'bebas-neue',
        fontSize: 13,
        color: '#adadad'
    }
});

export default HomeScreen;