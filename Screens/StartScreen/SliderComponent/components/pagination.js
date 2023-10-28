import React from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Pagination = ({ pg, data, scrollX, index }) => {
  return (
    <View
      style={[
        Styles.container,
        {
          bottom: pg !== 2 ? 50 : 185,
        },
      ]}
    >
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [9, 25, 9],
          extrapolate: "clamp",
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#ccc", "#056ffa", "#ccc"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={idx.toString()}
            style={[
              Styles.dot,
              { width: dotWidth, backgroundColor },
              //   idx === index && Styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    marginHorizontal: 3,
    backgroundColor: "#ccc",
  },
  dotActive: {
    // backgroundColor: "#2155CD",
    backgroundColor: "#056ffa",
  },
});
