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
// import { MapView, LinearGradient } from "expo";
if (Platform.OS != "dom") {
  var LinearGradient = require("react-native-linear-gradient").default;
} else {
  var LinearGradient = require("../components/LinearGradient").default;
}

class MapView extends React.Component {
  render() {
    return (
      <Image
        source={require("../images/mapmain.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", flex: 1 }}
      />
    );
  }
}

class HistoryScreen extends React.Component {
  onBack = () => {
    this.props.navigation.pop();
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View
          style={styles.toolbar}
          shadowColor={"#000"}
          shadowOffset={{ width: 5, height: 5 }}
          shadowOpacity={0.1}
          shadowRadius={5}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../images/shoe-icon.png")}
              style={styles.iconshoe}
            />
            <Text style={styles.titleText}>LAST RUN</Text>
          </View>
          <TouchableOpacity onPress={this.onBack}>
            <Image
              source={require("../images/x-icon.png")}
              style={styles.iconx}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ height: 400, zIndex: 1, marginBottom: 30 }}>
            <MapView
              style={{ height: 400 }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            />
            <LinearGradient
              colors={[
                "rgba(255,255,255,0)",
                "rgba(255,255,255,0.8)",
                "rgba(255,255,255,1)",
                "rgba(255,255,255,1)"
              ]}
              style={{
                height: 150,
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0
              }}
            />
            <View
              style={{
                height: 150,
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                paddingHorizontal: 35,
                paddingTop: 40
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 15
                }}
              >
                <Text style={[styles.text, { fontSize: 68 }]}>
                  4.8<Text style={[styles.text, { fontSize: 34 }]}> KM</Text>
                </Text>
                <View style={{ alignItems: "flex-end", marginTop: 8 }}>
                  <Text
                    style={[styles.text, { fontSize: 34, color: "#f02733" }]}
                  >
                    1566
                  </Text>
                  <Text
                    style={[styles.text, { fontSize: 20, color: "#adadad" }]}
                  >
                    TUE 17 MAY 2016
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={require("../images/timer-icon.png")}
                    style={styles.iconx}
                  />
                  <Text
                    style={[styles.text, { fontSize: 20, color: "#adadad" }]}
                  >
                    7'37"
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={require("../images/love-icon.png")}
                    style={styles.iconx}
                  />
                  <Text
                    style={[styles.text, { fontSize: 20, color: "#adadad" }]}
                  >
                    161bpm
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={require("../images/clock-icon.png")}
                    style={styles.iconx}
                  />
                  <Text
                    style={[styles.text, { fontSize: 20, color: "#adadad" }]}
                  >
                    00:35:08
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tabHeader}>
            <ScrollView horizontal={true}>
              <View
                style={{
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 25
                }}
              >
                <View
                  style={{
                    height: 60,
                    borderBottomWidth: 3,
                    borderBottomColor: "#f02733",
                    paddingVertical: 25,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 18,
                        height: 25,
                        color: "#000"
                      }
                    ]}
                  >
                    SPLITS
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 25
                }}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 18,
                      height: 25,
                      color: "#cdcdcd"
                    }
                  ]}
                >
                  SPEED
                </Text>
              </View>
              <View
                style={{
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 25
                }}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 18,
                      height: 25,
                      color: "#cdcdcd"
                    }
                  ]}
                >
                  HEARTRATE
                </Text>
              </View>
              <View
                style={{
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 25
                }}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 18,
                      height: 25,
                      color: "#cdcdcd"
                    }
                  ]}
                >
                  ACHIEVEMENTS
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.tabContent}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={[
                  styles.text,
                  { fontSize: 18, color: "#adadad", padding: 15 }
                ]}
              >
                1 KM
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 18,
                    color: "#cdcdcd",
                    padding: 15,
                    marginRight: 10
                  }
                ]}
              >
                6'48"
              </Text>
              <View
                style={{
                  height: 15,
                  borderRadius: 7,
                  width: 100,
                  backgroundColor: "#60ba52"
                }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={[
                  styles.text,
                  { fontSize: 18, color: "#adadad", padding: 15 }
                ]}
              >
                2 KM
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 18,
                    color: "#cdcdcd",
                    padding: 15,
                    marginRight: 10
                  }
                ]}
              >
                7'00"
              </Text>
              <View
                style={{
                  height: 15,
                  borderRadius: 7,
                  width: 80,
                  backgroundColor: "#60ba52"
                }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={[
                  styles.text,
                  { fontSize: 18, color: "#adadad", padding: 15 }
                ]}
              >
                3 KM
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 18,
                    color: "#cdcdcd",
                    padding: 15,
                    marginRight: 10
                  }
                ]}
              >
                7'10"
              </Text>
              <View
                style={{
                  height: 15,
                  borderRadius: 7,
                  width: 150,
                  backgroundColor: "#60ba52"
                }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={[
                  styles.text,
                  { fontSize: 18, color: "#adadad", padding: 15 }
                ]}
              >
                4 KM
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 18,
                    color: "#cdcdcd",
                    padding: 15,
                    marginRight: 10
                  }
                ]}
              >
                8'10"
              </Text>
              <View
                style={{
                  height: 15,
                  borderRadius: 7,
                  width: 120,
                  backgroundColor: "#60ba52"
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25
  },
  toolbar: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 2
  },
  iconx: {
    width: 30,
    height: 30
  },
  iconshoe: {
    width: 30,
    height: 30,
    marginRight: 6
  },
  titleText: {
    fontFamily: "BebasNeue",
    fontSize: 24,
    color: "#000"
  },
  text: {
    backgroundColor: "transparent",
    fontFamily: "BebasNeue"
  },
  tabHeader: {
    height: 60,
    borderTopWidth: 0.5,
    borderTopColor: "#adadad",
    borderBottomWidth: 0.5,
    borderBottomColor: "#adadad"
  },
  tabContent: {
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});

export default HistoryScreen;
