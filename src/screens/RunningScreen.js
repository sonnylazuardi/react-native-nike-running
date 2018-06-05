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

class RunningScreen extends React.Component {
  onBack = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f2d300" barStyle="dark-content" />
        <View style={styles.toolbar}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity onPress={this.onBack}>
              <Image
                source={require("../images/map-icon.png")}
                style={styles.logoicon}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../images/logonike.png")}
              style={styles.logosmall}
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../images/lock-icon.png")}
              style={styles.logoicon}
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.mainBar}>
            <Text
              style={[
                styles.text,
                { fontSize: 120, color: "#000", marginBottom: -20 }
              ]}
            >
              4.27
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 28, color: "#000", marginBottom: 20 }
              ]}
            >
              KILOMETERS
            </Text>
          </View>
          <View style={styles.optionBar}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../images/love-run-icon.png")}
                style={styles.iconoption}
              />
              <Text style={[styles.text, { color: "#fff", fontSize: 24 }]}>
                104
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../images/timer-run-icon.png")}
                style={styles.iconoption}
              />
              <Text style={[styles.text, { color: "#fff", fontSize: 24 }]}>
                45:32
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../images/fire-run-icon.png")}
                style={styles.iconoption}
              />
              <Text style={[styles.text, { color: "#fff", fontSize: 24 }]}>
                371
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../images/plus-run-icon.png")}
                style={styles.iconoption}
              />
              <Text style={[styles.text, { color: "#fff", fontSize: 24 }]}>
                294
              </Text>
            </View>
          </View>
          <View style={styles.graphBar}>
            <LinearGradient
              pointerEvents="none"
              colors={[
                "rgba(0,0,0,0.8)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)"
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                height: 200,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 5
              }}
            />
            <View
              style={{
                flexDirection: "row",
                height: 120,
                alignItems: "center",
                zIndex: 1
              }}
            >
              <View
                style={{ flex: 9, alignItems: "center", flexDirection: "row" }}
              >
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 40,
                      width: 15,
                      borderRadius: 7,
                      backgroundColor: "rgba(255,255,255,0.4)"
                    }}
                  />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 80,
                      width: 15,
                      borderRadius: 7,
                      backgroundColor: "rgba(255,255,255,0.4)"
                    }}
                  />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 90,
                      width: 15,
                      borderRadius: 7,
                      backgroundColor: "rgba(255,255,255,0.4)"
                    }}
                  />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 70,
                      width: 15,
                      borderRadius: 7,
                      backgroundColor: "rgba(255,255,255,0.4)"
                    }}
                  />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 60,
                      width: 15,
                      borderRadius: 7,
                      backgroundColor: "rgba(255,255,255,0.4)"
                    }}
                  />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 75,
                      width: 15,
                      borderRadius: 7,
                      backgroundColor: "rgba(255,255,255,0.4)"
                    }}
                  />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 70,
                      width: 15,
                      borderRadius: 7,
                      backgroundColor: "rgba(255,255,255,0.4)"
                    }}
                  />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 60,
                      width: 15,
                      borderRadius: 7,
                      backgroundColor: "rgba(255,255,255,0.4)"
                    }}
                  />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 80,
                      width: 15,
                      borderRadius: 7,
                      backgroundColor: "rgba(255,255,255,1)"
                    }}
                  />
                </View>
              </View>
              <View style={{ flex: 3, alignItems: "center" }}>
                <Text style={[styles.text, { color: "#fff", fontSize: 32 }]}>
                  6'54"
                </Text>
              </View>
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
          <TouchableOpacity style={styles.buttonBorderWrapper}>
            <View
              style={styles.buttonBorder}
              shadowColor={"#000"}
              shadowOffset={{ width: 10, height: 10 }}
              shadowOpacity={0.6}
              shadowRadius={30}
            >
              <Text style={styles.buttonBorderText}>PAUSE</Text>
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
    backgroundColor: "#f2d300"
  },
  toolbar: {
    flexDirection: "row",
    backgroundColor: "transparent",
    height: 85,
    paddingTop: 25,
    backgroundColor: "#f2d300"
  },
  logosmall: {
    width: 40,
    height: 15
  },
  logoicon: {
    height: 35,
    width: 35
  },
  text: {
    backgroundColor: "transparent",
    fontFamily: "BebasNeue"
  },
  buttonBorder: {
    backgroundColor: "#000",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonBorderText: {
    color: "#fff",
    fontFamily: "BebasNeue",
    fontSize: 24
  },
  mainBar: {
    backgroundColor: "#f2d300",
    justifyContent: "center",
    alignItems: "center",
    height: 180
  },
  optionBar: {
    height: 130,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 30,
    paddingHorizontal: 15,
    backgroundColor: "#000"
  },
  graphBar: {
    backgroundColor: "#000",
    minHeight: 300
  },
  iconoption: {
    width: 38,
    height: 38
  }
});

export default RunningScreen;
