import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

class LinearGradient extends Component {
  render() {
    const isTransparentTopToBottom = this.props.colors[0].indexOf(",0)") != -1;
    const isHorizontal = this.props.start != null && this.props.end != null;
    const style = {
      ...this.props.style,
      resizeMode: "stretch",
      tintColor: isTransparentTopToBottom
        ? this.props.colors[this.props.colors.length - 1]
        : this.props.colors[0],
      transform: [
        {
          rotate: isHorizontal
            ? "270deg"
            : isTransparentTopToBottom
              ? "180deg"
              : "0deg"
        }
      ],
      ...(isHorizontal ? { width: windowWidth, height: windowWidth } : null)
    };
    return (
      <Image
        pointerEvents="none"
        source={require("../images/gradient.png")}
        style={style}
      />
    );
  }
}

export default LinearGradient;
