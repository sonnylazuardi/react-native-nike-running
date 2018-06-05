import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Platform
} from "react-native";
// import { LinearGradient } from "expo";
if (Platform.OS != "dom") {
  var LinearGradient = require("react-native-linear-gradient").default;
} else {
  var LinearGradient = require("../components/LinearGradient").default;
}

class BeginRunScreen extends React.Component {
  onBack = () => {
    this.props.navigation.pop();
  };

  onRun = () => {
    this.props.navigation.push("Running");
  };

  componentDidMount() {
    this.refs.scrollView.scrollTo({ y: 0, x: 85, animated: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View style={styles.toolbar}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity onPress={this.onBack}>
              <Image
                source={require("../images/back-icon.png")}
                style={styles.logoicon}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../images/logonike-white.png")}
              style={styles.logosmall}
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../images/right-icon-white.png")}
              style={styles.logoicon}
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.mainBar}>
            <LinearGradient
              pointerEvents="none"
              colors={[
                "rgba(0,0,0,0.8)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0.8)"
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                height: 180,
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2
              }}
            />
            <ScrollView
              style={{ zIndex: 1 }}
              horizontal={true}
              snapToInterval={180}
              snapToAlignment={"center"}
              decelerationRate={0}
              automaticallyAdjustInsets={false}
              ref="scrollView"
            >
              <View
                style={{
                  height: 160,
                  width: 180,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../images/duration-icon.png")}
                  style={styles.iconmain}
                />
                <Text style={[styles.text, { color: "#fff", fontSize: 32 }]}>
                  DURATION TIME
                </Text>
              </View>
              <View
                style={{
                  height: 160,
                  width: 180,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../images/basic-icon.png")}
                  style={styles.iconmain}
                />
                <Text style={[styles.text, { color: "#fff", fontSize: 32 }]}>
                  BASIC RUN
                </Text>
              </View>
              <View
                style={{
                  height: 160,
                  width: 180,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../images/distance-icon.png")}
                  style={styles.iconmain}
                />
                <Text style={[styles.text, { color: "#fff", fontSize: 32 }]}>
                  DISTANCE RUN
                </Text>
              </View>
              <View
                style={{
                  height: 160,
                  width: 180,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../images/duration-icon.png")}
                  style={styles.iconmain}
                />
                <Text style={[styles.text, { color: "#fff", fontSize: 32 }]}>
                  DURATION TIME
                </Text>
              </View>
              <View
                style={{
                  height: 160,
                  width: 180,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../images/basic-icon.png")}
                  style={styles.iconmain}
                />
                <Text style={[styles.text, { color: "#fff", fontSize: 32 }]}>
                  BASIC RUN
                </Text>
              </View>
              <View
                style={{
                  height: 160,
                  width: 180,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../images/distance-icon.png")}
                  style={styles.iconmain}
                />
                <Text style={[styles.text, { color: "#fff", fontSize: 32 }]}>
                  DISTANCE RUN
                </Text>
              </View>
            </ScrollView>
            <View
              style={{
                position: "absolute",
                height: 2,
                bottom: 0,
                left: 0,
                right: 0,
                alignItems: "center"
              }}
            >
              <View
                style={{
                  height: 2,
                  width: 120,
                  borderBottomWidth: 2,
                  borderBottomColor: "#f02733"
                }}
              />
            </View>
          </View>
          <View style={styles.optionBar}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12
                }}
              >
                <Image
                  source={require("../images/love-small-icon.png")}
                  style={styles.iconoption}
                />
              </View>
              <Text style={[styles.text, { color: "#fff", fontSize: 18 }]}>
                HEART RATE
              </Text>
              <Text style={[styles.text, { color: "#f02733", fontSize: 18 }]}>
                ENABLED
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12
                }}
              >
                <Image
                  source={require("../images/map-small-icon.png")}
                  style={styles.iconoption}
                />
              </View>
              <Text style={[styles.text, { color: "#fff", fontSize: 18 }]}>
                LOCATION
              </Text>
              <Text style={[styles.text, { color: "#f02733", fontSize: 18 }]}>
                OUTDOOR
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12,
                  opacity: 0.5
                }}
              >
                <Image
                  source={require("../images/cheer-small-icon.png")}
                  style={[styles.iconoption, { opacity: 0.5 }]}
                />
              </View>
              <Text
                style={[
                  styles.text,
                  { color: "#fff", fontSize: 18, opacity: 0.5 }
                ]}
              >
                CHEERS
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: "#fff", fontSize: 18, opacity: 0.5 }
                ]}
              >
                OFF
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12
                }}
              >
                <Image
                  source={require("../images/orientation-small-icon.png")}
                  style={styles.iconoption}
                />
              </View>
              <Text style={[styles.text, { color: "#fff", fontSize: 18 }]}>
                ORIENTATION
              </Text>
              <Text style={[styles.text, { color: "#f02733", fontSize: 18 }]}>
                LANDSCAPE
              </Text>
            </View>
          </View>
          <View style={styles.playlistBar}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
                paddingHorizontal: 20
              }}
            >
              <Image
                source={require("../images/spotify.png")}
                style={styles.iconplaylist}
              />
              <Text style={[styles.text, { color: "#fff", fontSize: 20 }]}>
                SELECT PLAYLIST
              </Text>
            </View>
            <View>
              <ScrollView horizontal={true}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    marginLeft: 20,
                    marginRight: 10
                  }}
                >
                  <Image
                    source={require("../images/playlist-1.jpg")}
                    style={styles.imageplaylist}
                  />
                </View>
                <View style={{ width: 100, height: 100, marginRight: 10 }}>
                  <Image
                    source={require("../images/playlist-2.jpg")}
                    style={styles.imageplaylist}
                  />
                </View>
                <View style={{ width: 100, height: 100, marginRight: 10 }}>
                  <Image
                    source={require("../images/playlist-3.jpg")}
                    style={styles.imageplaylist}
                  />
                </View>
                <View style={{ width: 100, height: 100, marginRight: 10 }}>
                  <Image
                    source={require("../images/playlist-1.jpg")}
                    style={styles.imageplaylist}
                  />
                </View>
                <View style={{ width: 100, height: 100, marginRight: 10 }}>
                  <Image
                    source={require("../images/playlist-2.jpg")}
                    style={styles.imageplaylist}
                  />
                </View>
                <View style={{ width: 100, height: 100, marginRight: 10 }}>
                  <Image
                    source={require("../images/playlist-3.jpg")}
                    style={styles.imageplaylist}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 50,
            position: "absolute",
            bottom: 15,
            left: 0,
            right: 0
          }}
        >
          <TouchableOpacity
            style={styles.buttonRedWrapper}
            onPress={this.onRun}
          >
            <View
              style={styles.buttonRed}
              shadowColor={"#000"}
              shadowOffset={{ width: 10, height: 10 }}
              shadowOpacity={0.6}
              shadowRadius={30}
            >
              <Text style={styles.buttonRedText}>START</Text>
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
    backgroundColor: "#000",
    paddingTop: 25
  },
  toolbar: {
    flexDirection: "row",
    backgroundColor: "transparent",
    height: 60
  },
  logosmall: {
    width: 40,
    height: 15
  },
  logoicon: {
    height: 30,
    width: 30
  },
  mainBar: {
    height: 160,
    borderBottomWidth: 0.5,
    borderBottomColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25
  },
  text: {
    backgroundColor: "transparent",
    fontFamily: "BebasNeue"
  },
  iconmain: {
    width: 100,
    height: 100
  },
  optionBar: {
    height: 130,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#555",
    paddingBottom: 30,
    paddingHorizontal: 15
  },
  iconoption: {
    width: 32,
    height: 32
  },
  iconplaylist: {
    width: 35,
    height: 35
  },
  playlistBar: {
    paddingTop: 15,
    marginBottom: 10
  },
  imageplaylist: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  buttonRed: {
    backgroundColor: "#f02733",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonRedText: {
    color: "#fff",
    fontFamily: "BebasNeue",
    fontSize: 24
  }
});

export default BeginRunScreen;
