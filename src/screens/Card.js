import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

class Card extends React.Component {
  render() {
    return (
      <View
        style={styles.card}
        shadowColor={"#000"}
        shadowOffset={{ width: 0, height: 10 }}
        shadowOpacity={0.4}
        shadowRadius={20}
      >
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 400,
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 30,
    width: windowWidth - 80
  }
});

export default Card;
