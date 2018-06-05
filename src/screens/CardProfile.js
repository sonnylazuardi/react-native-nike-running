import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";

class CardProfile extends React.Component {
  render() {
    return (
      <Card>
        <View style={styles.cardHeader}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../images/profile-icon.png")}
                style={styles.profileicon}
              />
              <Text
                style={{
                  fontFamily: "BebasNeue",
                  fontSize: 18,
                  color: "#282a2c"
                }}
              >
                PROFILE
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "BebasNeue",
                  fontSize: 18,
                  color: "#adadad"
                }}
              >
                ON FIRE! 🔥
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContent}>
          <Image
            source={require("../images/profile-picture.jpg")}
            style={styles.profilepicture}
          />
          <Text
            style={{ fontFamily: "BebasNeue", fontSize: 64, color: "#ec242e" }}
          >
            12.035
          </Text>
          <Image
            source={require("../images/profile-icon-red.png")}
            style={styles.profileiconred}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardLabel}>TOTAL DISTANCE</Text>
            <Text style={styles.cardText}>
              27.81<Text style={styles.cardTextSmall}>KM</Text>
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardLabel}>TOTAL TIME</Text>
            <Text style={styles.cardText}>21:55:11</Text>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardLabel}>AVG PACE</Text>
            <Text style={styles.cardText}>6'42"</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardLabel}>DAILY AVG</Text>
            <Text style={styles.cardText}>1.855</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", height: 120, paddingHorizontal: 25 }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 68,
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 5
              }}
            >
              <View
                style={{
                  height: 20,
                  width: 10,
                  borderRadius: 7,
                  backgroundColor: "#f02733"
                }}
              />
            </View>
            <Text style={styles.graphText}>M</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 68,
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 5
              }}
            >
              <View
                style={{
                  height: 30,
                  width: 10,
                  borderRadius: 7,
                  backgroundColor: "#60ba52"
                }}
              />
            </View>
            <Text style={styles.graphText}>T</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 68,
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 5
              }}
            >
              <View
                style={{
                  height: 40,
                  width: 10,
                  borderRadius: 7,
                  backgroundColor: "#60ba52"
                }}
              />
            </View>
            <Text style={styles.graphText}>W</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 68,
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 5
              }}
            >
              <View
                style={{
                  height: 54,
                  width: 10,
                  borderRadius: 7,
                  backgroundColor: "#60ba52"
                }}
              />
            </View>
            <Text style={styles.graphText}>T</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 68,
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 5
              }}
            >
              <View
                style={{
                  height: 52,
                  width: 10,
                  borderRadius: 7,
                  backgroundColor: "#60ba52"
                }}
              />
            </View>
            <Text style={styles.graphText}>F</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ height: 68 }} />
            <Text style={styles.graphText}>S</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ height: 68 }} />
            <Text style={styles.graphText}>S</Text>
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
    justifyContent: "center"
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
  }
});

export default CardProfile;
