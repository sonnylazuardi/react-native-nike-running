import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";

class CardCoach extends React.Component {
  render() {
    return (
      <Card>
        <View style={styles.cardHeader}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../images/coach-icon.png")}
                style={styles.profileicon}
              />
              <Text
                style={{
                  fontFamily: "BebasNeue",
                  fontSize: 18,
                  color: "#282a2c"
                }}
              >
                NIKE+ COACH
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3
              }}
            >
              <Text
                style={{
                  fontFamily: "BebasNeue",
                  fontSize: 18,
                  color: "#adadad"
                }}
              >
                THIS WEEK
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: 30 }} />
        <View style={styles.cardContent}>
          <View style={{ flex: 2 }}>
            <Text style={styles.textSmall}>MON 16</Text>
          </View>
          <View style={{ flex: 5 }}>
            <Text style={styles.text}>WALK 1.6KM</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>🙌</Text>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={{ flex: 2 }}>
            <Text style={styles.textSmall}>TUE 17</Text>
          </View>
          <View style={{ flex: 5 }}>
            <Text style={styles.text}>RUN 4.8KM</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>💪</Text>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={{ flex: 2 }}>
            <Text style={[styles.textSmall, { color: "#f02733" }]}>WED 18</Text>
          </View>
          <View style={{ flex: 5 }}>
            <Text style={[styles.text, { color: "#f02733" }]}>CROSS TRAIN</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>🤔</Text>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={{ flex: 2 }}>
            <Text style={[styles.textSmall, { color: "#eee" }]}>THU 19</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={[styles.text, { color: "#eee" }]}>REST</Text>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={{ flex: 2 }}>
            <Text style={[styles.textSmall, { color: "#eee" }]}>FRI 20</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={[styles.text, { color: "#eee" }]}>WALK 1.6KM</Text>
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
    paddingBottom: 0
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
    fontFamily: "BebasNeue",
    fontSize: 20
  },
  textSmall: {
    fontFamily: "BebasNeue",
    fontSize: 14
  }
});

export default CardCoach;
