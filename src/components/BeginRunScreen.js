import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    ScrollView
} from 'react-native';
import { Components } from 'exponent';

class BeginRunScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                />
                <View style={styles.toolbar}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../images/back-icon.png')} style={styles.logoicon} />
                    </View>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../images/logonike-white.png')} style={styles.logosmall} />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../images/right-icon-white.png')} style={styles.logoicon} />
                    </View>
                </View>
                <View style={styles.mainBar}>
                    <ScrollView horizontal={true} snapToInterval={200} snapToAlignment={'center'}>
                        <View style={{height: 350, width: 200}}>
                            <Text>DURATION TIME</Text>
                        </View>
                        <View style={{height: 350, width: 200}}>
                            <Text>BASIC RUN</Text>
                        </View>
                        <View style={{height: 350, width: 200}}>
                            <Text>DISTANCE RUN</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 25
    },
    toolbar: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: 50
    },
    logosmall: {
        width: 40,
        height: 15,
    },
    logoicon: {
        height: 30,
        width: 30
    },
    mainBar: {
        height: 350,
        backgroundColor: '#ff0'
    }
});

export default BeginRunScreen;