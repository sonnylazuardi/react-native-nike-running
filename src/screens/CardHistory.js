import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";

class CardHistory extends React.Component {
  render() {
    return (
      <Card>
        <View style={styles.cardHeader}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../images/shoe-icon.png")}
                style={styles.profileicon}
              />
              <Text
                style={{
                  fontFamily: "BebasNeue",
                  fontSize: 18,
                  color: "#282a2c"
                }}
              >
                LAST RUN
              </Text>
            </View>
          </View>
        </View>
        <Image source={require("../images/map.jpg")} style={styles.imagemap} />
        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10
            }}
          >
            <Text style={[styles.text, { fontSize: 68 }]}>
              4.8<Text style={[styles.text, { fontSize: 28 }]}> KM</Text>
            </Text>
            <View style={{ alignItems: "flex-end", marginTop: 8 }}>
              <Text style={[styles.text, { fontSize: 28, color: "#f02733" }]}>
                1566
              </Text>
              <Text style={[styles.text, { fontSize: 16, color: "#adadad" }]}>
                TUE 17 MAY 2016
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("../images/timer-icon.png")}
                style={styles.iconx}
              />
              <Text style={[styles.text, { fontSize: 16, color: "#adadad" }]}>
                7'37"
              </Text>
            </View>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("../images/love-icon.png")}
                style={styles.iconx}
              />
              <Text style={[styles.text, { fontSize: 16, color: "#adadad" }]}>
                161bpm
              </Text>
            </View>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("../images/clock-icon.png")}
                style={styles.iconx}
              />
              <Text style={[styles.text, { fontSize: 16, color: "#adadad" }]}>
                00:35:08
              </Text>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 25,
    paddingBottom: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2
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
    flexDirection: "row",
    paddingHorizontal: 25,
    marginVertical: 8,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  profilepicture: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 5
  },
  cardLabel: {
    fontFamily: "BebasNeue",
    fontSize: 18,
    color: "#adadad"
  },
  cardText: {
    fontFamily: "BebasNeue",
    fontSize: 30
  },
  cardTextSmall: {
    fontFamily: "BebasNeue",
    fontSize: 13
  },
  graphText: {
    textAlign: "center",
    fontFamily: "BebasNeue",
    fontSize: 13,
    color: "#adadad"
  },
  text: {
    backgroundColor: "transparent",
    fontFamily: "BebasNeue"
  },
  textSmall: {
    fontFamily: "BebasNeue",
    fontSize: 14
  },
  iconx: {
    width: 28,
    height: 28
  },
  imagemap: {
    height: 200,
    flex: 1,
    zIndex: 1,
    borderRadius: 10
  }
});

export default CardHistory;
